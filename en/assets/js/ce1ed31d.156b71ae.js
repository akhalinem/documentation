"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6334],{3915:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return r},contentTitle:function(){return s},metadata:function(){return o},toc:function(){return p},default:function(){return c}});var a=n(7462),i=n(3366),l=(n(7294),n(4137)),r={sidebar_position:3},s="Segment",o={unversionedId:"reference/segments",id:"reference/segments",isDocsHomePage:!1,title:"Segment",description:"Segment - the third level of application partitioning, according to the purpose of the module in the code and implementation",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/reference/segments.md",sourceDirName:"reference",slug:"/reference/segments",permalink:"/en/docs/reference/segments",editUrl:"https://github.com/feature-sliced/documentation/edit/master/website/i18n/en/docusaurus-plugin-content-docs/current/reference/segments.md",tags:[],version:"current",lastUpdatedAt:1630568773,formattedLastUpdatedAt:"9/2/2021",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Shared",permalink:"/en/docs/reference/layers/shared"},next:{title:"Knowledge types",permalink:"/en/docs/reference/knowledge-types"}},p=[{value:"General rules",id:"general-rules",children:[]},{value:"<code>ui</code>",id:"ui",children:[{value:"Examples",id:"examples",children:[]}]},{value:"<code>model</code>",id:"model",children:[]},{value:"<code>lib</code>",id:"lib",children:[]},{value:"<code>api</code>",id:"api",children:[{value:"Examples",id:"examples-1",children:[]}]},{value:"<code>config</code>",id:"config",children:[{value:"Examples",id:"examples-2",children:[]}]},{value:"See also",id:"see-also",children:[]}],m={toc:p};function c(e){var t=e.components,n=(0,i.Z)(e,["components"]);return(0,l.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"segment"},"Segment"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Segment")," - the third level of application partitioning, according to the ",(0,l.kt)("strong",{parentName:"p"},"purpose of the module in the code and implementation")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"{layer}/\n    \u251c\u2500\u2500 {slice}/\n    |   \u251c\u2500\u2500 ui/                     # UI-logic (components, ui-widgets, ...)\n    |   \u251c\u2500\u2500 model/                  # Business logic (store, actions, effects, reducers, ...)\n    |   \u251c\u2500\u2500 lib/                    # Infrastructure logic (utils/helpers)\n    |   \u251c\u2500\u2500 config/                 # Application configuration (env-vars, ...)\n    |   \u2514\u2500\u2500 api/                    # Logic of API requests (api instances, requests, ...)\n")),(0,l.kt)("h2",{id:"general-rules"},"General rules"),(0,l.kt)("p",null,"Each of the above segments represents the levels of abstractions that are familiar to us when developing software."),(0,l.kt)("p",null,"Each of the segments is responsible for its own scope, but all together - ",(0,l.kt)("strong",{parentName:"p"},"they form a single image of this slice and its logic"),", specifically:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"its visual display (ui)"),(0,l.kt)("li",{parentName:"ul"},"its business logic (model)"),(0,l.kt)("li",{parentName:"ul"},"its auxiliary modules (lib)")),(0,l.kt)("p",null,"Also, in rare cases, affecting:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"its configuration (config)"),(0,l.kt)("li",{parentName:"ul"},"its logic for working with API requests (api)")),(0,l.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},(0,l.kt)("strong",{parentName:"p"},"Each segment can be either a file or a directory")," - it depends on the complexity of the slice being implemented"),(0,l.kt)("p",{parentName:"div"},"That is, such options are also quite acceptable:"),(0,l.kt)("pre",{parentName:"div"},(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"features/wallet/add-funds\n    \u251c\u2500\u2500 ui.tsx\n    \u251c\u2500\u2500 model.ts\n    \u2514\u2500\u2500 index.ts\n")),(0,l.kt)("pre",{parentName:"div"},(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"pages/home/\n    \u251c\u2500\u2500 index.tsx\n    \u2514\u2500\u2500 style.module.scss\n")))),(0,l.kt)("h2",{id:"ui"},(0,l.kt)("inlineCode",{parentName:"h2"},"ui")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"UI representation of the module")),(0,l.kt)("p",null,"It can contain inside:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Components of your UI framework (React, Vue, Angular, ...)"),(0,l.kt)("li",{parentName:"ul"},"Canvas-Widgets"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"(any other ui view modules)"))),(0,l.kt)("h3",{id:"examples"},"Examples"),(0,l.kt)("h4",{id:"complex-ui-for-the-layer"},"Complex UI for the layer"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"{layer}/{slice}/\n    \u251c\u2500\u2500 ui/\n    |   \u251c\u2500\u2500 toolbar/\n    |   |     \u251c\u2500\u2500 title/\n    |   |     \u2514\u2500\u2500 actions/\n    |   \u251c\u2500\u2500 content/\n    |   |     \u251c\u2500\u2500 sort/\n    |   |     \u2514\u2500\u2500 table/\n    |   \u2514\u2500\u2500 index.tsx/\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"title={layer}/{slice}/ui/index.tsx",title:"{layer}/{slice}/ui/index.tsx"},'import Toolbar from "./toolbar";\nimport Content from "./content";\nimport styles from "./styles.module.scss";\n\nexport const SomeForm = () => (\n    <Layout className={styles.root}>\n      <Toolbar className={styles.toolbar} />  \n      <Content className={styles.content} />\n    </Layout>\n)\n')),(0,l.kt)("h2",{id:"model"},(0,l.kt)("inlineCode",{parentName:"h2"},"model")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Business logic of the module")),(0,l.kt)("p",null,"May contain:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"The logic of creating and updating a mini-store for this slice",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"In the effector world: ",(0,l.kt)("inlineCode",{parentName:"em"},"createStore")," + ",(0,l.kt)("inlineCode",{parentName:"em"},"createDomain"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"In the redux world: ",(0,l.kt)("inlineCode",{parentName:"em"},"createSlice"))))),(0,l.kt)("li",{parentName:"ul"},"A list of events processed by the parent slice model and updating its state",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"In the effector world: ",(0,l.kt)("inlineCode",{parentName:"em"},"events"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"In the redux world: ",(0,l.kt)("inlineCode",{parentName:"em"},"actions")," + ",(0,l.kt)("inlineCode",{parentName:"em"},"dispatch"))))),(0,l.kt)("li",{parentName:"ul"},"List of asynchronous side effects, for loading data and other asynchronous operations",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"In the effector world: ",(0,l.kt)("inlineCode",{parentName:"em"},"effects"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"In the redux world: ",(0,l.kt)("inlineCode",{parentName:"em"},"thunks")," / ",(0,l.kt)("inlineCode",{parentName:"em"},"sagas")," / ",(0,l.kt)("inlineCode",{parentName:"em"},"epics"))))),(0,l.kt)("li",{parentName:"ul"},"List of selectors/contracts/hooks for using the slice state",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"In the effector world: ",(0,l.kt)("inlineCode",{parentName:"em"},"useStore"),", ...")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"In the redux world: ",(0,l.kt)("inlineCode",{parentName:"em"},"useSelector"),", ",(0,l.kt)("inlineCode",{parentName:"em"},"selectors")))))),(0,l.kt)("h2",{id:"lib"},(0,l.kt)("inlineCode",{parentName:"h2"},"lib")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Auxiliary libraries")),(0,l.kt)("p",null,"It usually contains a set of utilities that help writing logic and are distributed in groups, i.e. separate libraries."),(0,l.kt)("h2",{id:"api"},(0,l.kt)("inlineCode",{parentName:"h2"},"api")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Logic of interaction with the API")),(0,l.kt)("p",null,"Usually contains"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"instances for working with different external APIs"),(0,l.kt)("li",{parentName:"ul"},"methods / factories for calling specific endpoints")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"In rare cases (react-query / graphql), the queries themselves may lie near the place of use")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"But most often ",(0,l.kt)("a",{parentName:"em",href:"https://github.com/feature-sliced/documentation/discussions/66"},"recommended")," place the API segment in the 'shared' layer to reduce the number of logic entanglements"))),(0,l.kt)("p",null,"At the same time, this segment can be written manually or generated using the API scheme"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"For example, using ",(0,l.kt)("inlineCode",{parentName:"em"},"openapi-generator"),", ",(0,l.kt)("inlineCode",{parentName:"em"},"swagger-codegen")))),(0,l.kt)("h3",{id:"examples-1"},"Examples"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=**/**/api/user.ts",title:"**/**/api/user.ts"},"export class UserApi {\n    constructor(config) {...}\n    getList(params: GetListParams): Promise<User[]> {...}\n    ...\n}\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=**/**/model/thunks.ts",title:"**/**/model/thunks.ts"},'import { userApi } from "shared/api"\n\n// API instances can be created\n// both at the place of use and in the API segment itself\n//\n// const userApi = new UserApi();\n\nexport const getUserListThunk = createAsyncThunk("...", (params) => {\n    return userApi.getList(params);\n});\n')),(0,l.kt)("h2",{id:"config"},(0,l.kt)("inlineCode",{parentName:"h2"},"config")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Application configuration module and its environment")),(0,l.kt)("p",null,"It usually contains the application configuration and methods for working with it"),(0,l.kt)("h3",{id:"examples-2"},"Examples"),(0,l.kt)("h4",{id:"using-environment-variables"},"Using environment variables"),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"The implementation depends on the project and the team, here is just one of the options")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=shared/config/index.ts",title:"shared/config/index.ts"},'export const isDevEnv = NODE_ENV === "development";\nexport const OAUTH_TOKEN = getEnvVar("REACT_APP_OAUTH_TOKEN");\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"title=**/**/index.tsx",title:"**/**/index.tsx"},'import { OAUTH_TOKEN, isDevEnv } from "shared/config";\n\nexport const OAuthProvider = () => (\n    <OAuth\n        debug={isDevEnv}\n        token={OAUTH_TOKEN}\n        ...\n    />\n)\n')),(0,l.kt)("h2",{id:"see-also"},"See also"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("inlineCode",{parentName:"p"},"WIP:")," Over time, articles on each abstraction will appear")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/concepts/naming-adaptability"},"Naming adaptability")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/feature-sliced/documentation/discussions/66"},"(Discussion) Where the API should be located"))))}c.isMDXComponent=!0}}]);