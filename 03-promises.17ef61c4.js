var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},o=e.parcelRequired7c6;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in n){var o=n[e];delete n[e];var i={id:e,exports:{}};return t[e]=i,o.call(i.exports,i,i.exports),i.exports}var u=new Error("Cannot find module '"+e+"'");throw u.code="MODULE_NOT_FOUND",u}).register=function(e,t){n[e]=t},e.parcelRequired7c6=o);var i=o("iQIUW");const u={form:document.querySelector(".form"),inputDelay:document.querySelector("[name=delay"),inputStep:document.querySelector("[name=step]"),inputAmount:document.querySelector("[name=amount]"),button:document.querySelector("[type=submit]")};function r(e,t){const n=Math.random()>.3;return new Promise(((o,i)=>{setTimeout((()=>{n?o({position:e,delay:t}):i({position:e,delay:t})}),t)}))}u.form.addEventListener("submit",(function(e){e.preventDefault(),setTimeout((()=>{let e=0;for(let t=0;t<u.inputAmount.value;t+=1){e=t,r(e,+u.inputDelay.value+ +u.inputStep.value*t).then((({position:e,delay:t})=>{i.Notify.success(`✅ Fulfilled promise ${e} in ${t}ms`)})).catch((({position:e,delay:t})=>{i.Notify.failure(`❌ Rejected promise ${e} in ${t}ms`)}))}}),u.inputDelay.value)}));
//# sourceMappingURL=03-promises.17ef61c4.js.map
