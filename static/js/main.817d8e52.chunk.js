(this["webpackJsonpre-calculator2"]=this["webpackJsonpre-calculator2"]||[]).push([[0],{24:function(e,a,t){e.exports=t(34)},29:function(e,a,t){},30:function(e,a,t){},34:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(8),u=t.n(r),i=(t(29),t(11)),o=t(12),c=t(9),m=(t(30),t(37)),s=function(e){return e.toLocaleString(void 0,{maximumFractionDigits:2})},p=function(e){return(e.purchasePrice||0)+(e.estimatedRepairs||0)+(e.purchaseClosingCosts||0)+(e.preRentHoldingCosts||0)},d=function(e){var a=e.downPaymentPercentage,t=void 0===a?0:a,n=e.purchasePrice;return(void 0===n?0:n)*(100-t)/100},h=function(e){return p(e)-d(e)},g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,t=a/100*e;return t},f=function(e){var a=e.rent,t=e.vacancyRate,n=e.repairsRate,l=e.capitalExpendituresRate,r=e.insuranceRate,u=e.propertyManagementRate,i=e.purchasePrice,o=e.taxRate,c=e.floodInsuranceMonthlyCost,m=e.electricityMonthlyCost,s=e.waterMonthlyCost,p=e.sewerMonthlyCost,d=e.gasMonthlyCost,h=e.garbageMonthlyCost,f=e.hoaMonthlyCost;return I(e)+g(a,t)+g(a,n)+g(a,l)+g(i/12,r)+g(i/12,o)+(c||0)+(m||0)+(s||0)+(p||0)+(d||0)+(h||0)+(f||0)+g(a,u)},E=function(e){return e.rent-f(e)},N=function(e){var a=f(e)-I(e);return 12*(e.rent-a)/h(e)*100},b=function(e){return 12*E(e)/h(e)*100},v=function(e){var a=e.afterRepairValue,t=e.appreciation,n=e.projectionYear;return a*Math.pow(1+t/100,n)},C=function(e){return.06*e.afterRepairValue+4e3+5e3},V=function(e){var a=e.projectionYear,t=e.loanPeriod,n=e.interestRate,l=d(e);return y(l,12*a+1,12*t,n/100)},y=function(e,a,t,n){var l=n/12;return e*(Math.pow(1+l,t)-Math.pow(1+l,a))/(Math.pow(1+l,t)-1)},x=function(e){return h(e)},O=function(e){return v(e)-C(e)-V(e)-h(e)},R=function(e){var a=e.projectionYear;return 12*E(e)*a},P=function(e){var a=R(e);return O(e)+a},M=function(e){return P(e)/h(e)/e.projectionYear*100},w=function(e){return e.replace(/\D/g,"")},I=function(e){var a=e.loanPeriod,t=e.interestRate,n=d(e);if(!t)return n/(12*a);var l=12*a,r=t/100/12;return n/((Math.pow(1+r,l)-1)/(r*Math.pow(1+r,l)))},j=function(e,a){var t=Object(n.useState)((function(){try{var t=window.localStorage.getItem(e);return t?JSON.parse(t):a}catch(n){return console.log(n),a}})),l=Object(c.a)(t,2),r=l[0],u=l[1];return[r,function(a){try{var t=a instanceof Function?a(r):a;u(t),window.localStorage.setItem(e,JSON.stringify(t))}catch(n){console.log(n)}}]},$=function(e){var a=e.label,t=e.inputName,n=e.inputValue,r=e.additionalInfoText,u=e.handleOnChange,i=e.disabled,o=e.prefix,c=e.suffix,m=e.required,p=e.roundValue,d=void 0===p||p,h=e.isNumberInput,g="";m&&!n&&(g="is-invalid");var f=d?Math.ceil(n):n,E=f?s(Number(f)):"";return l.a.createElement("div",{className:"input-group row py-1 "},l.a.createElement("label",{className:"col-md-2"},a),l.a.createElement("div",{className:"col-md-4"},l.a.createElement("div",{className:"input-group"},l.a.createElement("div",{className:"input-group-prepend"},l.a.createElement("span",{className:"input-group-text"},o)),l.a.createElement("input",{className:"form-control "+g,name:t,value:E,onChange:u,disabled:i,type:h?"number":""}),l.a.createElement("div",{className:"input-group-append"},l.a.createElement("span",{className:"input-group-text"},c)))),l.a.createElement("div",{className:"col-md-2"},r))},F=function(e){var a=e.form,t=e.handleOnChange,n=a.purchasePrice,r=a.purchaseClosingCosts,u=a.preRentHoldingCosts,i=a.estimatedRepairs;return l.a.createElement("div",null,l.a.createElement("h2",null,"1) Total Project Cost: $",s(p(a))),l.a.createElement($,{label:"Purchase Price",inputValue:n,inputName:"purchasePrice",handleOnChange:t,prefix:"$",required:!0}),l.a.createElement($,{label:"Purchase Closing Costs",inputValue:r,inputName:"purchaseClosingCosts",handleOnChange:t,prefix:"$"}),l.a.createElement($,{label:"Pre-Rent Holding Costs",inputValue:u,inputName:"preRentHoldingCosts",handleOnChange:t,prefix:"$"}),l.a.createElement($,{label:"Estimated Repairs",inputValue:i,inputName:"estimatedRepairs",handleOnChange:t,prefix:"$"}),l.a.createElement($,{label:"Total Project Cost",inputValue:p(a),prefix:"$",disabled:!0}))},B=function(e){var a=e.form,t=e.handleOnChange,n=e.handleTextOnChange,r=a.askingPrice;return l.a.createElement("div",null,l.a.createElement("div",{className:"input-group row py-1"},l.a.createElement("label",{className:"col-md-2"},"Address"),l.a.createElement("div",{className:"col-md-4"},l.a.createElement("div",{className:"input-group"},l.a.createElement("input",{className:"form-control",name:"address",value:a.address,onChange:n,type:"text"})))),l.a.createElement($,{label:"Asking Price",inputName:"askingPrice",inputValue:r,handleOnChange:t,prefix:"$"}))},T=t(36),A=function(e){var a=e.defaults,t=e.handleOnSubmit,n=l.a.useState(Object(o.a)({},a)),r=Object(c.a)(n,2),u=r[0],s=r[1],p=function(e){var a=e.target.value.replace(/,/g,"");isNaN(Number(a))||s(Object(o.a)({},u,Object(i.a)({},e.target.name,Number(a))))},d=l.a.useState(!1),h=Object(c.a)(d,2),g=h[0],f=h[1],E=function(){return f(!1)},N=u.purchaseClosingCosts,b=u.loanPeriod,v=u.interestRate,C=u.downPaymentPercentage,V=u.vacancyRate,y=u.repairsRate,x=u.capitalExpendituresRate,O=u.insuranceRate,R=u.taxRate,P=u.propertyManagementRate,M=u.projectionYear,w=u.appreciation;return l.a.createElement(l.a.Fragment,null,l.a.createElement(m.a,{variant:"primary",onClick:function(){return f(!0)},className:"float-right"},"Edit Defaults"),l.a.createElement(T.a,{show:g,onHide:E,size:"lg"},l.a.createElement(T.a.Header,{closeButton:!0},l.a.createElement(T.a.Title,null,"Defaults")),l.a.createElement(T.a.Body,null,l.a.createElement("form",null,l.a.createElement("div",null,l.a.createElement($,{label:"Purchase Closing Costs",inputName:"purchaseClosingCosts",inputValue:N,handleOnChange:p,prefix:"$"}),l.a.createElement($,{label:"Loan Period",inputName:"loanPeriod",inputValue:b,handleOnChange:p,suffix:"years",roundValue:!1,isNumberInput:!0}),l.a.createElement($,{label:"Interest Rate",inputName:"interestRate",inputValue:v,handleOnChange:p,suffix:"%",roundValue:!1,isNumberInput:!0}),l.a.createElement($,{label:"Down Payment Percentage",inputName:"downPaymentPercentage",inputValue:C,handleOnChange:p,suffix:"%",roundValue:!1,isNumberInput:!0}),l.a.createElement($,{label:"Vacancy Rate",inputName:"vacancyRate",inputValue:V,handleOnChange:p,suffix:"%",roundValue:!1,isNumberInput:!0}),l.a.createElement($,{label:"Repair Percentage",inputName:"repairsRate",inputValue:y,handleOnChange:p,suffix:"%",roundValue:!1,isNumberInput:!0}),l.a.createElement($,{label:"Capital Expenditure Percentage",inputName:"capitalExpendituresRate",inputValue:x,handleOnChange:p,suffix:"%",roundValue:!1,isNumberInput:!0}),l.a.createElement($,{label:"Insurance Rate",inputName:"insuranceRate",inputValue:O,handleOnChange:p,suffix:"%",roundValue:!1,isNumberInput:!0}),l.a.createElement($,{label:"Tax Rate",inputName:"taxRate",inputValue:R,handleOnChange:p,suffix:"%",roundValue:!1,isNumberInput:!0}),l.a.createElement($,{label:"Property Management Rate",inputName:"propertyManagementRate",inputValue:P,handleOnChange:p,suffix:"%",roundValue:!1,isNumberInput:!0}),l.a.createElement($,{label:"Projection Year",inputName:"projectionYear",inputValue:M,handleOnChange:p,suffix:"years",roundValue:!1,isNumberInput:!0}),l.a.createElement($,{label:"Appreciation",inputName:"appreciation",inputValue:w,handleOnChange:p,suffix:"%",roundValue:!1,isNumberInput:!0})))),l.a.createElement(T.a.Footer,null,l.a.createElement(m.a,{variant:"primary",onClick:function(){t(u),E()}},"Save Changes"))))},S=function(e){var a=e.label,t=e.inputName,n=e.additionalInfoText,r=e.percentageValue,u=e.wholeMonthlyValue,i=e.handleOnChange,o=e.setFormValueByName,c=e.disableYear,m=e.monthAppendValue,p=g(u,r),d=function(e){var a=Number(w(e.target.value))/12/u*100;o(t,a)},h=p?s(Math.ceil(p)):"",f=Math.round(100*r)/100;return l.a.createElement("div",{className:"input-group row py-1"},l.a.createElement("label",{className:"col-md-2"},a),l.a.createElement("div",{className:"col-md-4"},l.a.createElement("div",{className:"input-group"},l.a.createElement("div",{className:"input-group-prepend"},l.a.createElement("span",{className:"input-group-text"},"$")),l.a.createElement("input",{className:"form-control",value:h,onChange:function(e){var a=Number(w(e.target.value))/u*100;o(t,a)}}),l.a.createElement("div",{className:"input-group-append"},l.a.createElement("span",{className:"input-group-text"},m)))),function(){if(c)return null;var e=p?s(Math.ceil(12*p)):"";return l.a.createElement("div",{className:"col-md-3"},l.a.createElement("div",{className:"input-group"},l.a.createElement("input",{className:"form-control",value:e,onChange:d}),l.a.createElement("div",{className:"input-group-append"},l.a.createElement("span",{className:"input-group-text"},"/yr."))))}(),l.a.createElement("div",{className:"col-md-3"},l.a.createElement("div",{className:"input-group"},l.a.createElement("input",{className:"form-control",type:"number",value:f,name:t,onChange:i}),l.a.createElement("div",{className:"input-group-append"},l.a.createElement("span",{className:"input-group-text"},"%")))),l.a.createElement("div",{className:"col-md-12"},l.a.createElement("span",{className:"mx-auto"},n)))},Y=function(e){var a=e.form,t=e.handleOnChange,n=e.setFormValueByName,r=a.downPaymentPercentage,u=a.purchasePrice,i=d(a),o=h(a);return l.a.createElement("div",null,l.a.createElement("h2",null,"2) Total Cost Out of Pocket: $",s(h(a))),l.a.createElement(S,{label:"Down Payment",inputName:"downPaymentPercentage",percentageValue:r,wholeMonthlyValue:u,handleOnChange:t,setFormValueByName:n,disableYear:!0}),l.a.createElement($,{label:"Loan",prefix:"$",disabled:!0,inputValue:i}),l.a.createElement($,{label:"Out of Pocket",inputValue:o,prefix:"$",disabled:!0}))},k=function(e){var a=e.form,t=e.handleOnChange,n=a.loanPeriod,r=a.interestRate,u=I(a);return l.a.createElement("div",null,l.a.createElement("h2",null,"3) Monthly Mortgage Payment: $",s(u),"/mo."),l.a.createElement($,{label:"Loan Period",inputValue:n,inputName:"loanPeriod",handleOnChange:t,suffix:"years"}),l.a.createElement($,{label:"Interest Rate",inputValue:r,inputName:"interestRate",handleOnChange:t,suffix:"%",roundValue:!1,isNumberInput:!0}))},D=function(e){var a=e.form,t=e.handleOnChange,n=a.rent;return l.a.createElement("div",null,l.a.createElement("h2",null,"4) Total Income: $ ",s(n||0),"/mo."),l.a.createElement($,{label:"Rent",inputValue:n,inputName:"rent",handleOnChange:t,prefix:"$",suffix:"/mo.",required:!0}))},H=function(e){var a=e.label,t=e.inputName,n=e.inputValue,r=e.handleOnChange,u=e.setFormValueByName;return l.a.createElement("div",{className:"input-group row py-1 "},l.a.createElement("label",{className:"col-md-2"},a),l.a.createElement("div",{className:"col-md-4"},l.a.createElement("div",{className:"input-group"},l.a.createElement("div",{className:"input-group-prepend"},l.a.createElement("span",{className:"input-group-text"},"$")),l.a.createElement("input",{className:"form-control",name:t,value:n?s(Math.ceil(n)):"",onChange:r}),l.a.createElement("div",{className:"input-group-append"},l.a.createElement("span",{className:"input-group-text"},"/mo.")))),l.a.createElement("div",{className:"col-md-3"},l.a.createElement("div",{className:"input-group"},l.a.createElement("input",{className:"form-control",value:n?s(12*n):"",onChange:function(e){var a=Number(e.target.value.replace(/\D/g,""))/12;u(t,a)}}),l.a.createElement("div",{className:"input-group-append"},l.a.createElement("span",{className:"input-group-text"},"/yr.")))))},L=function(e){var a=e.form,t=e.handleOnChange,n=e.setFormValueByName,r=I(a);return l.a.createElement("div",null,l.a.createElement("h2",null,"5) Total Expenses: $ ",s(f(a)),"/mo."),l.a.createElement($,{label:"Mortgage",inputValue:r,disabled:!0,prefix:"$",suffix:"/mo."}),l.a.createElement(S,{label:"Vacancy",inputName:"vacancyRate",percentageValue:a.vacancyRate,wholeMonthlyValue:a.rent,handleOnChange:t,setFormValueByName:n,monthAppendValue:"/mo."}),l.a.createElement(S,{label:"Repairs",inputName:"repairsRate",percentageValue:a.repairsRate,wholeMonthlyValue:a.rent,handleOnChange:t,setFormValueByName:n,monthAppendValue:"/mo."}),l.a.createElement(S,{label:"Capital Expenditures",inputName:"capitalExpendituresRate",percentageValue:a.capitalExpendituresRate,wholeMonthlyValue:a.rent,handleOnChange:t,setFormValueByName:n,monthAppendValue:"/mo."}),l.a.createElement(S,{label:"Insurance",inputName:"insuranceRate",percentageValue:a.insuranceRate,wholeMonthlyValue:a.purchasePrice/12,handleOnChange:t,setFormValueByName:n,monthAppendValue:"/mo."}),l.a.createElement(S,{label:"Taxes",inputName:"taxRate",percentageValue:a.taxRate,wholeMonthlyValue:a.purchasePrice/12,handleOnChange:t,setFormValueByName:n,monthAppendValue:"/mo."}),l.a.createElement(H,{label:"Flood Insurance",inputName:"floodInsuranceMonthlyCost",inputValue:a.floodInsuranceMonthlyCost,handleOnChange:t,setFormValueByName:n}),l.a.createElement(H,{label:"Electricity",inputName:"electricityMonthlyCost",inputValue:a.electricityMonthlyCost,handleOnChange:t,setFormValueByName:n}),l.a.createElement(H,{label:"Water",inputName:"waterMonthlyCost",inputValue:a.waterMonthlyCost,handleOnChange:t,setFormValueByName:n}),l.a.createElement(H,{label:"Sewer",inputName:"sewerMonthlyCost",inputValue:a.sewerMonthlyCost,handleOnChange:t,setFormValueByName:n}),l.a.createElement(H,{label:"Gas",inputName:"gasMonthlyCost",inputValue:a.gasMonthlyCost,handleOnChange:t,setFormValueByName:n}),l.a.createElement(H,{label:"Garbage",inputName:"garbageMonthlyCost",inputValue:a.garbageMonthlyCost,handleOnChange:t,setFormValueByName:n}),l.a.createElement(H,{label:"HOA",inputName:"hoaMonthlyCost",inputValue:a.hoaMonthlyCost,handleOnChange:t,setFormValueByName:n}),l.a.createElement(S,{label:"Property Management",inputName:"propertyManagementRate",percentageValue:a.propertyManagementRate,wholeMonthlyValue:a.rent,handleOnChange:t,setFormValueByName:n,monthAppendValue:"/mo."}),l.a.createElement($,{label:"Total Expenses",inputValue:f(a),disabled:!0,prefix:"$",suffix:"/mo."}))},q=function(e){var a=e.form;return l.a.createElement("div",null,l.a.createElement("h2",null,"6) Evaluation"),l.a.createElement($,{label:"Cashflow",inputValue:E(a),prefix:"$",suffix:"/mo.",disabled:!0}),l.a.createElement($,{label:"ROI (without mortgage)",inputValue:N(a),suffix:"%",disabled:!0}),l.a.createElement($,{label:"ROI",inputValue:b(a),suffix:"%",disabled:!0}))},J=function(e){var a=e.form,t=e.handleOnChange,n=a.projectionYear,r=a.afterRepairValue,u=a.appreciation;return l.a.createElement("div",null,l.a.createElement("h2",null,"7) Projection"),l.a.createElement($,{label:"Year",inputValue:n,inputName:"projectionYear",handleOnChange:t,suffix:"yr."}),l.a.createElement($,{label:"After Repair Value (ARV)",inputValue:r,inputName:"afterRepairValue",handleOnChange:t,prefix:"$",required:!0}),l.a.createElement($,{label:"Appreciation",inputValue:u,inputName:"appreciation",handleOnChange:t,suffix:"%",roundValue:!1,additionalInfoText:"(National Average: 4.4%)",isNumberInput:!0}),l.a.createElement($,{label:"Sale Price",inputValue:v(a),prefix:"$",disabled:!0}),l.a.createElement($,{label:"Sale Expenses",inputValue:C(a),prefix:"$",disabled:!0}),l.a.createElement($,{label:"Loan Payoff",inputValue:V(a),prefix:"$",disabled:!0}),l.a.createElement($,{label:"Total Invested Capital",inputValue:x(a),prefix:"$",disabled:!0}),l.a.createElement($,{label:"Profit",inputValue:O(a),prefix:"$",disabled:!0}),l.a.createElement($,{label:"Total cashflow",inputValue:R(a),prefix:"$",disabled:!0}),l.a.createElement($,{label:"Total Profit (with cashflow)",inputValue:P(a),prefix:"$",disabled:!0}),l.a.createElement($,{label:"ROI",inputValue:M(a),suffix:"%",disabled:!0}))},W=function(){var e={address:"",purchaseClosingCosts:5e3,loanPeriod:30,interestRate:5,downPaymentPercentage:20,vacancyRate:5,repairsRate:5,capitalExpendituresRate:12.5,insuranceRate:.5,taxRate:1.06,propertyManagementRate:11,projectionYear:5,appreciation:4.4},a=j("defaults",e),t=Object(c.a)(a,2),n=t[0],r=t[1],u=j("form",e),s=Object(c.a)(u,2),p=s[0],d=s[1],h=l.a.useState(p||e),g=Object(c.a)(h,2),f=g[0],E=g[1],N=function(e){var a=e.target.value.replace(/,/g,"");if(!isNaN(Number(a))){var t=Object(o.a)({},f,Object(i.a)({},e.target.name,Number(a)));E(t),d(t)}},b=function(e,a){var t=Object(o.a)({},f,Object(i.a)({},e,Number(a)));E(t),d(t)};return l.a.createElement("div",{className:"App"},l.a.createElement("div",{className:"container"},l.a.createElement("h1",{className:"text-center"},"RE Calculator"),l.a.createElement("hr",{className:"solid"}),l.a.createElement(A,{defaults:n,handleOnSubmit:function(e){r(e);var a=Object(o.a)({},f,{},e);E(a),d(a)}}),l.a.createElement("div",null,l.a.createElement(m.a,{variant:"primary",onClick:function(){d(e),E(e)},className:"float-right clear-fix",style:{marginRight:"10px"}},"Reset Numbers"),l.a.createElement("br",null)),l.a.createElement("form",null,l.a.createElement(B,{form:f,handleOnChange:N,handleTextOnChange:function(e){var a=Object(o.a)({},f,Object(i.a)({},e.target.name,e.target.value));E(a),d(a)}}),l.a.createElement(F,{form:f,handleOnChange:N}),l.a.createElement(Y,{form:f,handleOnChange:N,setFormValueByName:b}),l.a.createElement(k,{form:f,handleOnChange:N}),l.a.createElement(D,{form:f,handleOnChange:N}),l.a.createElement(L,{form:f,handleOnChange:N,setFormValueByName:b}),l.a.createElement(q,{form:f}),l.a.createElement(J,{form:f,handleOnChange:N}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(33);u.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(W,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[24,1,2]]]);
//# sourceMappingURL=main.817d8e52.chunk.js.map