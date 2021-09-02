"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4545],{8989:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return u},default:function(){return c}});var n=a(7462),i=a(3366),r=(a(7294),a(4137)),o={sidebar_position:1},l="About architecture",s={unversionedId:"concepts/architecture",id:"concepts/architecture",isDocsHomePage:!1,title:"About architecture",description:"Problems",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/concepts/architecture.md",sourceDirName:"concepts",slug:"/concepts/architecture",permalink:"/en/docs/concepts/architecture",editUrl:"https://github.com/feature-sliced/documentation/edit/master/website/i18n/en/docusaurus-plugin-content-docs/current/concepts/architecture.md",tags:[],version:"current",lastUpdatedAt:1630568773,formattedLastUpdatedAt:"9/2/2021",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Signals of architecture",permalink:"/en/docs/concepts/signals"},next:{title:"Needs driven",permalink:"/en/docs/concepts/needs-driven"}},u=[{value:"Problems",id:"problems",children:[{value:"Bus-factor &amp; Onboarding",id:"bus-factor--onboarding",children:[]},{value:"Implicit and uncontrolled consequences",id:"implicit-and-uncontrolled-consequences",children:[]},{value:"Uncontrolled reuse of logic",id:"uncontrolled-reuse-of-logic",children:[]}]},{value:"Requirements",id:"requirements",children:[{value:"Explicitness",id:"explicitness",children:[]},{value:"Control",id:"control",children:[]},{value:"Adaptability",id:"adaptability",children:[]}]},{value:"See also",id:"see-also",children:[]}],p={toc:u};function c(e){var t=e.components,a=(0,i.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"about-architecture"},"About architecture"),(0,r.kt)("h2",{id:"problems"},"Problems"),(0,r.kt)("p",null,"Usually, the conversation about architecture is raised when the development stops due to certain problems in the project."),(0,r.kt)("h3",{id:"bus-factor--onboarding"},"Bus-factor & Onboarding"),(0,r.kt)("p",null,"Only a limited number of people understand the project and its architecture"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Examples:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},'"It\'s difficult to add a person to the development"')),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},'"For every problem, everyone has their own opinion on how to get around" (let\'s envy the angular)')),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},'"I don\'t understand what is happening in this big piece of monolith"'))),(0,r.kt)("h3",{id:"implicit-and-uncontrolled-consequences"},"Implicit and uncontrolled consequences"),(0,r.kt)("p",null,"A lot of implicit side effects during development/refactoring ",(0,r.kt)("em",{parentName:"p"},'("everything depends on everything")')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Examples:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},'"The feature imports the feature"')),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},'"I updated the store of one page, and the functionality fell off on the other"')),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},'"The logic is smeared all over the application, and it is impossible to track where the beginning is, where the end is"'))),(0,r.kt)("h3",{id:"uncontrolled-reuse-of-logic"},"Uncontrolled reuse of logic"),(0,r.kt)("p",null,"It is difficult to reuse/modify existing logic"),(0,r.kt)("p",null,"At the same time, there are usually ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/feature-sliced/documentation/discussions/14"},"two extremes"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Either the logic is written completely from scratch for each module ",(0,r.kt)("em",{parentName:"li"},"(with possible repetitions in the existing codebase)")),(0,r.kt)("li",{parentName:"ul"},"Either there is a tendency to transfer all-all implemented modules to ",(0,r.kt)("inlineCode",{parentName:"li"},"shared")," folders, thereby creating a large dump of modules ",(0,r.kt)("em",{parentName:"li"},"from it (where most are used only in one place)"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Examples:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},'"I have ',(0,r.kt)("strong",{parentName:"em"},"N"),' implementations of the same business logic in my project, for which I still pay"')),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},'"There are 6 different components of the button/pop-up/... In the project"')),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},'"Dump of helpers"'))),(0,r.kt)("h2",{id:"requirements"},"Requirements"),(0,r.kt)("p",null,"Therefore, it seems logical to present the desired ",(0,r.kt)("em",{parentName:"p"},"requirements for an ideal architecture:")),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},'Wherever it says "easy", it means "relatively easy for a wide range of developers", because it is clear that ',(0,r.kt)("a",{parentName:"p",href:"/docs/about/mission#restrictions"},"it will not be possible to make an ideal solution for absolutely everyone")))),(0,r.kt)("h3",{id:"explicitness"},"Explicitness"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"It should be ",(0,r.kt)("strong",{parentName:"li"},"easy to master and explain")," the project and its architecture to the team"),(0,r.kt)("li",{parentName:"ul"},"The structure should reflect the real ",(0,r.kt)("strong",{parentName:"li"},"business values of the project")),(0,r.kt)("li",{parentName:"ul"},"There must be explicit ",(0,r.kt)("strong",{parentName:"li"},"side effects and connections")," between abstractions"),(0,r.kt)("li",{parentName:"ul"},"It should be ",(0,r.kt)("strong",{parentName:"li"},"easy to detect duplicate logic")," without interfering with unique implementations"),(0,r.kt)("li",{parentName:"ul"},"There should be no ",(0,r.kt)("strong",{parentName:"li"},"dispersion of logic")," throughout the project"),(0,r.kt)("li",{parentName:"ul"},"There should not be ",(0,r.kt)("strong",{parentName:"li"},"too many heterogeneous abstractions and rules")," for a good architecture")),(0,r.kt)("h3",{id:"control"},"Control"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A good architecture should ",(0,r.kt)("strong",{parentName:"li"},"speed up the solution of tasks, the introduction of features")),(0,r.kt)("li",{parentName:"ul"},"It should be possible to control the development of the project"),(0,r.kt)("li",{parentName:"ul"},"It should be easy to ",(0,r.kt)("strong",{parentName:"li"},"expand, modify, delete the code")),(0,r.kt)("li",{parentName:"ul"},"The * decomposition and isolation of** functionality must be observed"),(0,r.kt)("li",{parentName:"ul"},"Each component of the system must be ",(0,r.kt)("strong",{parentName:"li"},"easily replaceable and removable"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},(0,r.kt)("a",{parentName:"em",href:"https://youtu.be/BWAeYuWFHhs?t=1631"},"No need to optimize for changes")," - we can't predict the future")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},(0,r.kt)("a",{parentName:"em",href:"https://youtu.be/BWAeYuWFHhs?t=1666"},"Better-optimize for deletion")," - based on the context that already exists"))))),(0,r.kt)("h3",{id:"adaptability"},"Adaptability"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A good architecture should be applicable ",(0,r.kt)("strong",{parentName:"li"},"to most projects"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"With existing infrastructure solutions")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"At any stage of development")))),(0,r.kt)("li",{parentName:"ul"},"There should be no dependence on the framework and platform"),(0,r.kt)("li",{parentName:"ul"},"It should be possible to ",(0,r.kt)("strong",{parentName:"li"},"easily scale the project and the team"),", with the possibility of parallelization of development"),(0,r.kt)("li",{parentName:"ul"},"It should be easy ",(0,r.kt)("strong",{parentName:"li"},"to adapt to changing requirements and circumstances"))),(0,r.kt)("h2",{id:"see-also"},"See also"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://youtu.be/BWAeYuWFHhs"},"(React Berlin Talk) Oleg Isonen - Feature Driven Architecture")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://t.me/feature_slices"},"(React SPB Meetup #1) Sergey Sova - Feature Slices")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://alexmngn.medium.com/why-react-developers-should-modularize-their-applications-d26d381854c1"},"(Article) About project modularization")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://ryanlanciaux.com/blog/2017/08/20/a-feature-based-approach-to-react-development/"},"(Article) About Separation of Concerns and structuring by features"))))}c.isMDXComponent=!0}}]);