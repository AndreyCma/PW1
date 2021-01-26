document.addEventListener("DOMContentLoaded", () => {

  class Elem {
    constructor(selector){
      this.selector = selector;
    }

    html(content) {
      document.querySelector(this.selector).innerHTML += content;
    }

    append(content) {
      let existedContent = document.querySelector(this.selector).textContent;
      document.querySelector(this.selector).innerHTML = existedContent + ' ' + content;
    }
    prepend(content) {
      let existedContent = document.querySelector(this.selector).textContent;
      document.querySelector(this.selector).innerHTML = content + ' ' + existedContent
    }

    attr(attr,value) {
      document.querySelector(this.selector).setAttribute(attr,value);
    }
  }

  let elem = new Elem('div');
  elem.html("hello");
  elem.append("content");
  elem.prepend("begining");
  elem.attr("class","www");
  elem.attr("title","hello");



});