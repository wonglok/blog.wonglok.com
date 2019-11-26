import marked from 'marked'
// import createDOMPurify from 'dompurify'
import readingTime from 'reading-time'
import axios from 'axios'
import sanitizeHtml from 'sanitize-html'
import hljs from 'highlight.js'
import 'highlight.js/styles/monokai-sublime.css'

// import { JSDOM } from 'jsdom'

// export const DOMCleaner = createDOMPurify(globa.window || new JSDOM('').window)


export const siteURL = `https://blog.wonglok.com`
export const baseURL = `https://blog-api.wonglok.com`
export const getPostsBySlug = async ({ slug }) => {
  const resp = await axios({
    method: 'GET',
    baseURL,
    url: `/blogs/?slug=${slug}`
  })
  return resp.data
}

export const getLatestPosts = async () => {
  const pagination = `&_start=0&_limit=15`
  const published = `&published=true`
  const resp = await axios({
    method: 'GET',
    baseURL,
    url: `/blogs/?_sort=createdAt:DESC${pagination}${published}`
  })
  return resp.data
}

export const getRelated = async ({ post }) => {
  const pagination = `&_start=1&_limit=3`
  const createdAt = `&createdAt_lte=${post.createdAt}`
  const resp = await axios({
    method: 'GET',
    baseURL,
    url: `/blogs/?_sort=createdAt:DESC${pagination}${createdAt}`
  })
  return resp.data
}

export const renderHTML = ({ content }) => {
  let renderer = new marked.Renderer()
  renderer.heading = (text, level) => {
    const escapedText = text.toLowerCase().replace(/[^\w]+/g, '-');
    let lvl = 4 - level
    if (lvl <= 0) {
      lvl = 1
    }
    let html = `<p class="text-${Math.ceil(lvl).toFixed(0)}xl md:text-3xl mb-5">\n${text}\n</p>`
    return html
  }
  renderer.paragraph = (text) => {
    let html = `<p class="py-6">\n${text}\n</p>`
    return html
  }
  renderer.blockquote = (text) => {
    let html = `<blockquote class="border-l-4 border-teal-500 italic my-8 pl-8 md:pl-12">\n${text}\n</blockquote>`
    return html
  }
  renderer.link = (href, title, text) => {
    let html = `<a name="${title}" title="${title}" class="text-gray-800 hover:text-teal-500 no-underline border-b-2 border-teal-500" href="${encodeURI(href)}">\n${text}\n</a>`
    return html
  }
  renderer.listitem = (text, isTask, done) => {
    return `<li class="py-3">${isTask ? (done ? `[✅]` : '[🕐]') : ''} ${text}</li>`
  }
  renderer.tablecell = (content, flags) => {
    let tag = flags.header ? 'th' : 'td'
    return `<${tag} class="pr-5 py-3 pl-0">${content}</${tag}>`
  }
  renderer.code = (code, codeType, escaped) => {
    let rID = `A${(Math.random() * 100000).toFixed(0)}`
    // code = hljs.highlightAuto(code, [codeType]).value
    return `<pre class="bg-gray-900 rounded text-white font-mono text-base p-4"><code id="${rID}" class="break-words whitespace-pre-wrap ${codeType}">${code}</code></pre>`
  }

  let options = {
    renderer,
    // highlight: function(code) {
    //   return require('highlight.js').highlightBlock(code).value;
    // },
    pedantic: false,
    gfm: true,
    breaks: false,
    sanitize: false,
    smartLists: true,
    smartypants: false,
    xhtml: false
  }

  let htmlR = marked(content || '<div></div>', options)
  let cleanContent = sanitizeHtml(htmlR, {
    allowedAttributes: {
      a: [ 'href', 'name', 'target' ],
      img: [ 'src' ],
      '*': ['style', 'class', 'id']
    }
  })
  // console.log(cleanContent)
  return cleanContent
}

setInterval(() => {
  if (globalThis.document) {
    document.querySelectorAll('pre code:not(.hljs)').forEach(block => {
      hljs.highlightBlock(block)
    })
  }
}, 300)

export const getReadingTime = (v) => {
  let val = readingTime(v).minutes
  return val < 1 ? 1 : val.toFixed(0)
}

export const getLokProfSettings = async () => {
  let settingsURL = `/blogsettings?slug=lok-profile`
  let resp = await axios({
    method: 'GET',
    baseURL,
    url: settingsURL
  })
  let raw = resp.data[0].json
  return raw
}