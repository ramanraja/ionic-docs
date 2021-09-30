(self.webpackChunkionic_docs=self.webpackChunkionic_docs||[]).push([[39317],{8824:function(t,e,n){"use strict";n.r(e),n.d(e,{frontMatter:function(){return l},metadata:function(){return o},toc:function(){return d},default:function(){return m}});var a=n(22122),i=n(19756),r=(n(67294),n(3905)),l={},o={unversionedId:"react/config",id:"react/config",isDocsHomePage:!1,title:"Config",description:"Ionic Config provides a way to change the properties of components globally across an app. It can set the app mode, tab button layout, animations, and more.",source:"@site/docs/react/config.md",sourceDirName:"react",slug:"/react/config",permalink:"/docs/react/config",editUrl:"https://github.com/ionic-team/ionic-docs/edit/main/docs/react/config.md",version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Slides",permalink:"/docs/react/slides"},next:{title:"Platform",permalink:"/docs/react/platform"}},d=[{value:"Global Config",id:"global-config",children:[]},{value:"Per-Platform Config",id:"per-platform-config",children:[]},{value:"Config Options",id:"config-options",children:[]}],p={toc:d};function m(t){var e=t.components,n=(0,i.Z)(t,["components"]);return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Ionic Config provides a way to change the properties of components globally across an app. It can set the app mode, tab button layout, animations, and more."),(0,r.kt)("h2",{id:"global-config"},"Global Config"),(0,r.kt)("p",null,"To override the initial Ionic config for the app, import the ",(0,r.kt)("inlineCode",{parentName:"p"},"setupConfig")," method from ",(0,r.kt)("inlineCode",{parentName:"p"},"@ionic/react"),", and call it before you render any Ionic components (including ",(0,r.kt)("inlineCode",{parentName:"p"},"IonApp"),")."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"setupConfig({\n  rippleEffect: false,\n  mode: 'md'\n});\n")),(0,r.kt)("p",null,"In the above example, we are disabling the Material Design ripple effect across the app, as well as forcing the mode to be Material Design."),(0,r.kt)("h2",{id:"per-platform-config"},"Per-Platform Config"),(0,r.kt)("p",null,"Ionic Config can also be set on a per-platform basis. For example, this allows you to disable animations if the app is being run in a browser on a potentially slower device. Developers can take advantage of the Platform utilities to accomplish this."),(0,r.kt)("p",null,"In the following example, we are disabling all animations in our Ionic app only if the app is running in a mobile web browser.\nThe ",(0,r.kt)("inlineCode",{parentName:"p"},"isPlatform()")," call returns ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"false")," based upon the platform that is passed in. See the ",(0,r.kt)("a",{parentName:"p",href:"./platform#platforms"},"Platform Documentation")," for a list of possible values."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { isPlatform, setupConfig } from '@ionic/react';\n\nsetupConfig({\n  animated: !isPlatform('mobileweb')\n});\n")),(0,r.kt)("p",null,"The next example allows you to set an entirely different configuration based upon the platform, falling back to a default config if no platforms match:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { isPlatform, setupConfig } from '@ionic/react';\n\nconst getConfig = () => {\n  if (isPlatform('hybrid')) {\n    return {\n      backButtonText: 'Previous',\n      tabButtonLayout: 'label-hide'\n    }\n  }\n  \n  return {\n    menuIcon: 'ellipsis-vertical'\n  }\n}\n\nsetupConfig(getConfig());\n")),(0,r.kt)("p",null,"Finally, this example allows you to accumulate a config object based upon different platform requirements:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { isPlatform, setupConfig } from '@ionic/react';\n\nconst getConfig = () => {\n  let config = {\n    animated: false\n  };\n  \n  if (isPlatform('iphone')) {\n    config = {\n      ...config,\n      backButtonText: 'Previous'\n    }\n  }\n  \n  return config;\n}\nsetupConfig(getConfig());\n")),(0,r.kt)("h2",{id:"config-options"},"Config Options"),(0,r.kt)("p",null,"Below is a list of config options that Ionic uses."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Config"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"actionSheetEnter")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"AnimationBuilder")),(0,r.kt)("td",{parentName:"tr",align:null},"Provides a custom enter animation for all ",(0,r.kt)("inlineCode",{parentName:"td"},"ion-action-sheet"),', overriding the default "animation".')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"actionSheetLeave")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"AnimationBuilder")),(0,r.kt)("td",{parentName:"tr",align:null},"Provides a custom leave animation for all ",(0,r.kt)("inlineCode",{parentName:"td"},"ion-action-sheet"),', overriding the default "animation".')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"alertEnter")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"AnimationBuilder")),(0,r.kt)("td",{parentName:"tr",align:null},"Provides a custom enter animation for all ",(0,r.kt)("inlineCode",{parentName:"td"},"ion-alert"),', overriding the default "animation".')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"alertLeave")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"AnimationBuilder")),(0,r.kt)("td",{parentName:"tr",align:null},"Provides a custom leave animation for all ",(0,r.kt)("inlineCode",{parentName:"td"},"ion-alert"),', overriding the default "animation".')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"animated")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"boolean")),(0,r.kt)("td",{parentName:"tr",align:null},"If ",(0,r.kt)("inlineCode",{parentName:"td"},"true"),", Ionic will enable all animations and transitions across the app.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"backButtonIcon")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"Overrides the default icon in all ",(0,r.kt)("inlineCode",{parentName:"td"},"<ion-back-button>")," components.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"backButtonText")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"Overrides the default text in all ",(0,r.kt)("inlineCode",{parentName:"td"},"<ion-back-button>")," components.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"hardwareBackButton")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"boolean")),(0,r.kt)("td",{parentName:"tr",align:null},"If ",(0,r.kt)("inlineCode",{parentName:"td"},"true"),", Ionic will respond to the hardware back button in an Android device.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"infiniteLoadingSpinner")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"SpinnerTypes")),(0,r.kt)("td",{parentName:"tr",align:null},"Overrides the default spinner type in all ",(0,r.kt)("inlineCode",{parentName:"td"},"<ion-infinite-scroll-content>")," components.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"loadingEnter")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"AnimationBuilder")),(0,r.kt)("td",{parentName:"tr",align:null},"Provides a custom enter animation for all ",(0,r.kt)("inlineCode",{parentName:"td"},"ion-loading"),', overriding the default "animation".')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"loadingLeave")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"AnimationBuilder")),(0,r.kt)("td",{parentName:"tr",align:null},"Provides a custom leave animation for all ",(0,r.kt)("inlineCode",{parentName:"td"},"ion-loading"),', overriding the default "animation".')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"loadingSpinner")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"SpinnerTypes")),(0,r.kt)("td",{parentName:"tr",align:null},"Overrides the default spinner for all ",(0,r.kt)("inlineCode",{parentName:"td"},"ion-loading")," overlays.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"menuIcon")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"Overrides the default icon in all ",(0,r.kt)("inlineCode",{parentName:"td"},"<ion-menu-button>")," components.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"menuType")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"Overrides the default menu type for all ",(0,r.kt)("inlineCode",{parentName:"td"},"<ion-menu>")," components.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"modalEnter")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"AnimationBuilder")),(0,r.kt)("td",{parentName:"tr",align:null},"Provides a custom enter animation for all ",(0,r.kt)("inlineCode",{parentName:"td"},"ion-modal"),', overriding the default "animation".')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"modalLeave")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"AnimationBuilder")),(0,r.kt)("td",{parentName:"tr",align:null},"Provides a custom leave animation for all ",(0,r.kt)("inlineCode",{parentName:"td"},"ion-modal"),', overriding the default "animation".')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"mode")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Mode")),(0,r.kt)("td",{parentName:"tr",align:null},"The mode determines which platform styles to use for the whole application.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"navAnimation")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"AnimationBuilder")),(0,r.kt)("td",{parentName:"tr",align:null},'Overrides the default "animation" of all ',(0,r.kt)("inlineCode",{parentName:"td"},"ion-nav")," and ",(0,r.kt)("inlineCode",{parentName:"td"},"ion-router-outlet")," across the whole application.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"pickerEnter")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"AnimationBuilder")),(0,r.kt)("td",{parentName:"tr",align:null},"Provides a custom enter animation for all ",(0,r.kt)("inlineCode",{parentName:"td"},"ion-picker"),', overriding the default "animation".')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"pickerLeave")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"AnimationBuilder")),(0,r.kt)("td",{parentName:"tr",align:null},"Provides a custom leave animation for all ",(0,r.kt)("inlineCode",{parentName:"td"},"ion-picker"),', overriding the default "animation".')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"popoverEnter")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"AnimationBuilder")),(0,r.kt)("td",{parentName:"tr",align:null},"Provides a custom enter animation for all ",(0,r.kt)("inlineCode",{parentName:"td"},"ion-popover"),', overriding the default "animation".')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"popoverLeave")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"AnimationBuilder")),(0,r.kt)("td",{parentName:"tr",align:null},"Provides a custom leave animation for all ",(0,r.kt)("inlineCode",{parentName:"td"},"ion-popover"),', overriding the default "animation".')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"refreshingIcon")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"Overrides the default icon in all ",(0,r.kt)("inlineCode",{parentName:"td"},"<ion-refresh-content>")," components.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"refreshingSpinner")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"SpinnerTypes")),(0,r.kt)("td",{parentName:"tr",align:null},"Overrides the default spinner type in all ",(0,r.kt)("inlineCode",{parentName:"td"},"<ion-refresh-content>")," components.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"sanitizerEnabled")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"boolean")),(0,r.kt)("td",{parentName:"tr",align:null},"If ",(0,r.kt)("inlineCode",{parentName:"td"},"true"),", Ionic will enable a basic DOM sanitizer on component properties that accept custom HTML.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"spinner")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"SpinnerTypes")),(0,r.kt)("td",{parentName:"tr",align:null},"Overrides the default spinner in all ",(0,r.kt)("inlineCode",{parentName:"td"},"<ion-spinner>")," components.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"statusTap")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"boolean")),(0,r.kt)("td",{parentName:"tr",align:null},"If ",(0,r.kt)("inlineCode",{parentName:"td"},"true"),", clicking or tapping the status bar will cause the content to scroll to the top.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"swipeBackEnabled")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"boolean")),(0,r.kt)("td",{parentName:"tr",align:null},"If ",(0,r.kt)("inlineCode",{parentName:"td"},"true"),', Ionic will enable the "swipe-to-go-back" gesture across the application.')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"tabButtonLayout")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"TabButtonLayout")),(0,r.kt)("td",{parentName:"tr",align:null},'Overrides the default "layout" of all ',(0,r.kt)("inlineCode",{parentName:"td"},"ion-bar-button")," across the whole application.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"toastEnter")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"AnimationBuilder")),(0,r.kt)("td",{parentName:"tr",align:null},"Provides a custom enter animation for all ",(0,r.kt)("inlineCode",{parentName:"td"},"ion-toast"),', overriding the default "animation".')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"toastLeave")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"AnimationBuilder")),(0,r.kt)("td",{parentName:"tr",align:null},"Provides a custom leave animation for all ",(0,r.kt)("inlineCode",{parentName:"td"},"ion-toast"),', overriding the default "animation".')))))}m.isMDXComponent=!0}}]);