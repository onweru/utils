function elem(selector, parent = document){
  let elem = document.querySelector(selector);
  return elem != false ? elem : false;
}

function elems(selector) {
  let elems = document.querySelectorAll(selector);
  return elems.length ? elems : false; 
}

function classPresent(el, targetClass) {
  if(el && typeof el == 'object' && targetClass) {
    let elClass = el.classList
    return elClass.contains(targetClass);
  }
}

function pushClass(el, targetClasses) {
  // equivalent to addClass
  if (el && typeof el == 'object' && targetClasses) {
    let targets = targetClasses.split(" ");
    targets.forEach(function(targetClass) {
      elClass = el.classList;
      elClass.contains(targetClass) ? false : elClass.add(targetClass);
    });
  }
}

function deleteClass(el, targetClass) {
  // equivalent to removeClass
  if (el && typeof el == 'object' && targetClass) {
    elClass = el.classList;
    elClass.contains(targetClass) ? elClass.remove(targetClass) : false;
  }
}

function modifyClass(el, targetClass) {
  // equivalent to toggleClass
  if (el && typeof el == 'object' && targetClass) {
    elClass = el.classList;
    elClass.contains(targetClass) ? elClass.remove(targetClass) : elClass.add(targetClass);
  }
}

(function toggleFaq() {
  let faqs = elems('.faq');
  if (faqs) {
    faqs.forEach(function(faq) {
      let question = faq.children[0];
      question.addEventListener('click', function(event) {
        let expandingClass = 'faq_expanded';
        let faqToExpand = this.parentNode;
        modifyClass(faqToExpand, expandingClass);

        let otherFaqs = Array.from(faqToExpand.parentNode.children).filter(function(child) {
          return child !== faqToExpand;
        });
        console.log(otherFaqs)
        otherFaqs.forEach(function(otherFaq) {
          classPresent(otherFaq, expandingClass) ? deleteClass(otherFaq, expandingClass) : console.log("Nothing to do");
        });
      });
    })
  } 
})();