"use strict";(("undefined"!=typeof self?self:global).webpackChunkopen=("undefined"!=typeof self?self:global).webpackChunkopen||[]).push([[3817],{65798:(e,n,i)=>{i.d(n,{Z:()=>o});var t=i(74822),a=i(64116),s=i(38201),r=i(11527);const o=({name:e,uri:n,images:i,isHero:o,testId:l,description:d,index:c,requestId:m,color:u})=>(0,r.jsx)(t.C,{index:c,featureIdentifier:"artist_concerts",headerText:e,uri:n,isPlayable:!1,renderCardImage:()=>(0,r.jsx)(a.x,{isHero:o,images:i,color:u}),renderSubHeaderContent:()=>(0,r.jsx)(s.i,{isHero:o,children:(0,r.jsx)("span",{children:d||""})}),testId:l,requestId:m})},4919:(e,n,i)=>{i.d(n,{T:()=>I});i(99692);var t=i(50959),a=i(29482),s=i(83665),r=i(62447),o=i(97362),l=i(88234),d=i(10781),c=i(91189),m=i(80344),u=i(98900),p=i(42189),k=i(86612);const f="iSdDcgYotxUpyRSGLR62",g="EqZ5uEZ02bJiKlZNijVQ",x="UroGtnEGQiwN1yKyNXjC",b="Tv3tod8ggHvNrrRzE1Kg",S="dWaG35yHF_9XzU2FlAce";var N=i(11527);const v=({content:e})=>(0,N.jsxs)(a.D,{as:"p",semanticColor:"textBrightAccent",className:S,children:[(0,N.jsx)(s.V,{size:"small"}),e]}),h=({content:e})=>(0,N.jsxs)(a.D,{as:"p",semanticColor:"textBrightAccent",className:S,children:[(0,N.jsx)(r.o,{size:"small"}),e]}),y=({content:e})=>(0,N.jsx)(a.D,{as:"p",className:S,children:e}),j=e=>{switch(e.type){case"SPOTIFY_EXCLUSIVE":return(0,N.jsx)(v,{...e});case"TOP_FANS_EXCLUSIVE":case"TOP_FANS_DISCOUNT":case"LIMITED_EDITION":return(0,N.jsx)(h,{...e});default:return(0,N.jsx)(y,{...e})}},w=({price:e,salePrice:n})=>n?(0,N.jsxs)("div",{children:[(0,N.jsxs)(a.D,{variant:"mesto",semanticColor:"textBrightAccent",children:[n," "]}),(0,N.jsx)(a.D,{variant:"mesto",style:{textDecoration:"line-through"},children:e})]}):(0,N.jsx)(a.D,{variant:"mesto",children:e}),I=({name:e,uri:n,href:i,images:a,index:s,price:r,testId:S,salePrice:v,label:h,artists:y})=>{const I=(0,t.useMemo)((()=>y.items.map((e=>"profile"in e.data?e.data.profile.name:"")).join(u.ag.getSeparator())),[y.items]),{spec:F,logger:C}=(0,p.fU)(m.I,{data:{position:s,uri:n,reason:h?.type||""}}),_=(0,k.X)(a,{desiredSize:300}),P=(0,t.useCallback)((()=>{C.logInteraction(F.cardLinkFactory({position:0}).hitNavigateToExternalUri({destination:i})),window.open(i,"_blank")}),[i,C,F]);return(0,N.jsx)(o.Z,{id:n,"data-testid":S,title:(0,N.jsx)(l.l,{className:b,children:e}),pretitle:h&&(0,N.jsx)(j,{type:h.type,content:h.content}),media:(0,N.jsx)("div",{className:f,children:_?(0,N.jsx)(d.x,{size:"sm",src:_?.url,alt:e}):(0,N.jsx)("div",{className:g,children:(0,N.jsx)("div",{className:x,children:(0,N.jsx)(c.C,{size:"xxlarge","aria-hidden":!0,"data-testid":"card-image-fallback"})})})}),onClick:P,size:"sm",subtitle:(0,N.jsx)(w,{price:r,salePrice:v}),body:I},n)}},25991:(e,n,i)=>{i.r(n),i.d(n,{BrowsePage:()=>H});i(99692);var t=i(50959),a=i(84875),s=i.n(a),r=i(67026),o=i(98900),l=i(45705),d=i(42189),c=i(17599),m=i(29482),u=i(15318),p=i(7146),k=i(55085),f=i(31926);const g="lXcKpCtaEeFf1HifX139",x="KZy9ufUbVUdmV7qnCE2e",b="xcTrtCsYOPtSElbX9inq",S="SRs2_Y3HzK0cy8JMy9li",N="DMiqZINqPhstZTTXScSC";var v=i(11527);const h=({images:e,color:n=c.k77,title:i,subtitle:t})=>{const a=0===e.length?p.fR.SMALL:p.fR.DEFAULT;return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsxs)(p.gF,{backgroundImages:e,backgroundColor:n,size:a,children:[(0,v.jsx)(k.W,{children:i?(0,v.jsx)(f.i,{text:i}):null}),(0,v.jsxs)(p.sP,{children:[i?(0,v.jsx)(p.xd,{children:i}):null,t&&(0,v.jsx)(m.D,{variant:"mesto",className:S,children:t})]})]}),(0,v.jsx)(u.H,{color:n})]})};i(95101),i(32548);var y=i(42982),j=i(46167),w=i(93462),I=i(92180),F=i(4908),C=i(96504),_=i(89862);const P={chips:"T8Vmv6htAP7bht774xG5",chip:"BX1DapBHMyHxwyF1aFRv"};function T({section:e}){return(0,v.jsx)("div",{className:P.chips,children:e.sectionItems.items.map((e=>function(e){return"BrowseSectionContainerWrapper"===e.content.__typename&&"BrowseSectionContainer"===e.content.data.__typename&&e.content.data.data?.cardRepresentation?.title?.transformedLabel?(0,v.jsxs)(I.A,{as:C.Z,href:(0,_.t1)(e.uri),className:P.chip,children:[e.content.data.data.cardRepresentation.title.transformedLabel,(0,v.jsx)(F.V,{size:"xsmall"})]},e.uri):null}(e)))})}var D=i(5842),L=i(48018);const R=({section:e,position:n,showAll:i})=>{const a=(0,t.useMemo)((()=>e.sectionItems.items.map(((e,n)=>(0,D.O)(e,n))).filter(j.K)),[e.sectionItems.items]);switch(e.data?.__typename){case"BrowseGenericSectionData":return(0,v.jsx)(L.q,{title:e.data?.title?.transformedLabel??"",tagline:e.data?.subtitle?.transformedLabel??"",total:e.sectionItems.totalCount,seeAllUri:(0,_.px)(e.uri),index:n,id:e.uri,showAll:i,children:a});case"BrowseGridSectionData":return(0,v.jsx)(L.q,{title:e.data?.title?.transformedLabel??"",tagline:e.data?.subtitle?.transformedLabel??"",total:e.sectionItems.totalCount,index:n,id:e.uri,seeAllUri:e.targetLocation?(0,_.t1)(e.targetLocation):void 0,forceTitleClickNavigation:Boolean(e.targetLocation),className:N,showAll:!0,colGap:y.nu,rowGap:y.nu,children:a});case"BrowseRelatedSectionData":return(0,v.jsx)(T,{section:e});case"BrowseSingleItemSectionData":case"BrowseUnsupportedSectionData":case void 0:return null;default:return(0,w._)(e.data),null}};var B=i(99952);const O=({uri:e,fallback:n})=>{const{section:i,error:t,fetchNextItems:a}=(0,B.X)(e),s=i?.data?.title?.transformedLabel,r=i?.data?.subtitle?.transformedLabel,o=i?.sectionItems.items??[];return 0===o.length||null!==t?n():(0,v.jsx)(l.C,{onReachBottom:a,children:(0,v.jsx)(L.q,{title:s??"",tagline:r??"",index:0,id:e,showAll:!0,children:o.map(((e,n)=>(0,D.O)(e,n)))})})};var A=i(71856),E=i(27293),U=i(77671),V=i(6401),M=(i(2178),i(39017)),W=i(80961),q=i(49450),G=i(2893),X=i(70860),Z=(i(45963),i(47895));const z={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"browsePage"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"uri"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"ID"}}}},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"pagePagination"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"PaginationInput"}}}},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"sectionPagination"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"PaginationInput"}}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"browse"},arguments:[{kind:"Argument",name:{kind:"Name",value:"input"},value:{kind:"ObjectValue",fields:[{kind:"ObjectField",name:{kind:"Name",value:"pagePagination"},value:{kind:"Variable",name:{kind:"Name",value:"pagePagination"}}},{kind:"ObjectField",name:{kind:"Name",value:"sectionPagination"},value:{kind:"Variable",name:{kind:"Name",value:"sectionPagination"}}},{kind:"ObjectField",name:{kind:"Name",value:"uri"},value:{kind:"Variable",name:{kind:"Name",value:"uri"}}}]}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"__typename"}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"BrowseSectionContainer"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"header"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"backgroundImage"},selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"browseImageSources"}}]}},{kind:"Field",name:{kind:"Name",value:"color"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"hex"}}]}},{kind:"Field",name:{kind:"Name",value:"title"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"transformedLabel"}}]}},{kind:"Field",name:{kind:"Name",value:"subtitle"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"transformedLabel"}}]}}]}},{kind:"Field",name:{kind:"Name",value:"uri"}},{kind:"Field",name:{kind:"Name",value:"sections"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"totalCount"}},{kind:"Field",name:{kind:"Name",value:"pagingInfo"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"nextOffset"}}]}},{kind:"Field",name:{kind:"Name",value:"items"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"__typename"}},{kind:"FragmentSpread",name:{kind:"Name",value:"browseSectionItem"}}]}}]}}]}}]}}]}},...Z.N9.definitions,...Z.K1.definitions,{kind:"FragmentDefinition",name:{kind:"Name",value:"browseSectionItem"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"BrowseSection"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"__typename"}},{kind:"Field",name:{kind:"Name",value:"uri"}},{kind:"Field",name:{kind:"Name",value:"data"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"__typename"}},{kind:"Field",name:{kind:"Name",value:"title"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"transformedLabel"}}]}},{kind:"Field",name:{kind:"Name",value:"subtitle"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"transformedLabel"}}]}}]}},{kind:"Field",name:{kind:"Name",value:"sectionItems"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"totalCount"}},{kind:"Field",name:{kind:"Name",value:"items"},selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"browseItem"}}]}}]}},{kind:"Field",name:{kind:"Name",value:"targetLocation"}}]}},...Z.H5.definitions,...Z.RL.definitions,...Z.X6.definitions,...Z.nE.definitions,...Z._C.definitions,...Z.Tf.definitions,...Z.tl.definitions,...Z.dV.definitions,...Z.qJ.definitions,...Z.YJ.definitions,...Z.zZ.definitions,...Z.Fk.definitions,...Z.Go.definitions,...Z.dK.definitions,...Z.$z.definitions]};const H=({uri:e,id:n})=>{const{header:i,sections:a,error:c,fetchNextSections:m}=(e=>{const{request:n}=(0,t.useContext)(W.Ax),{data:i,isLoading:a,error:s,fetchNextPage:r}=(0,M.useInfiniteQuery)(["browse","page",e,{numberOfSections:10,numberOfItems:10}],(async({pageParam:i=0})=>(0,q.J)(n,z,function(e,n,i,t){return{pagePagination:{offset:n,limit:10},sectionPagination:{offset:0,limit:10},uri:e}}(e,i))),{cacheTime:G.ws,staleTime:G._p,getNextPageParam:e=>{if("BrowseSectionContainer"===e?.data?.browse?.__typename)return e.data.browse.sections?.pagingInfo.nextOffset??void 0}}),o=(0,t.useCallback)((async()=>{await r()}),[r]),l=(0,t.useMemo)((()=>i?.pages?i.pages.reduce(((e,n)=>"BrowseSectionContainer"===n?.data?.browse?.__typename&&n.data.browse.sections?.items?[...e,...n.data.browse.sections.items]:e),[]):[]),[i?.pages]);return{header:(0,t.useMemo)((()=>{if(i?.pages)for(const e of i.pages)if("BrowseSectionContainer"===e?.data?.browse?.__typename)return{title:e.data.browse.header?.title?.transformedLabel??void 0,color:e.data.browse.header?.color?.hex??void 0,images:e.data.browse.header?.backgroundImage?.sources.map(X.Np)??[],subtitle:e.data.browse.header?.subtitle?.transformedLabel??void 0}}),[i?.pages]),sections:l,error:s,loading:a,fetchNextSections:o}})(e),{spec:u,UBIFragment:k}=(0,d.fU)(r.createDesktopGenreEventFactory,{data:{identifier:e,uri:e}}),f=(0,t.useMemo)((()=>u.shelvesFactory()),[u]),S=(0,V.g)(),N=(0,p.oX)(n);if(0===a.length||null!==c)return(0,v.jsx)(U.h,{hasError:null!==c,errorMessage:o.ag.get("error.generic")});const y=i?.title;return(0,v.jsxs)(k,{spec:u,children:[(0,v.jsx)(E.$,{children:i?.title??o.ag.get("browse")}),y?(0,v.jsx)("div",{className:g,children:N?(0,v.jsx)(p.YD,{isAnonymous:S}):(0,v.jsx)(h,{title:i.title,subtitle:i.subtitle,color:i.color,images:i.images})}):null,(0,v.jsx)(k,{spec:f,children:(0,v.jsxs)("div",{className:b,children:[y&&(0,v.jsx)(A.I,{backgroundColor:i.color}),(0,v.jsx)("div",{className:s()("contentSpacing",x),children:1===a.length?(0,v.jsx)(O,{uri:a[0].uri,fallback:()=>(0,v.jsx)(R,{section:a[0],position:0,showAll:!0})}):(0,v.jsx)(l.C,{onReachBottom:m,children:a.map(((e,n)=>(0,v.jsx)(R,{section:e,position:n,showAll:!1},e.uri)))})})]})})]})}},60561:(e,n,i)=>{i.r(n),i.d(n,{BrowseSection:()=>x});i(99692);var t=i(50959),a=i(84875),s=i.n(a),r=i(67026),o=i(98900),l=i(45705),d=i(42189),c=i(5842),m=i(27293),u=i(77671),p=i(48018),k=i(99952);const f="Z3ISr2E5M6kLGdC7dCDQ";var g=i(11527);const x=({uri:e})=>{const{section:n,error:i,fetchNextItems:a}=(0,k.X)(e),{spec:x,UBIFragment:b}=(0,d.fU)(r.createDesktopGenreEventFactory,{data:{identifier:e,uri:e}}),S=(0,t.useMemo)((()=>x.shelvesFactory()),[x]),N=n?.data?.title?.transformedLabel,v=n?.data?.subtitle?.transformedLabel,h=n?.sectionItems.items??[];return 0===h.length||null!==i?(0,g.jsx)(u.h,{hasError:null!==i,errorMessage:o.ag.get("error.generic")}):(0,g.jsxs)(b,{spec:x,children:[(0,g.jsx)(m.$,{children:N??o.ag.get("browse")}),(0,g.jsx)(b,{spec:S,children:(0,g.jsx)("div",{className:s()("contentSpacing",f),children:(0,g.jsx)(l.C,{onReachBottom:a,children:(0,g.jsx)(p.q,{title:N??"",tagline:v??"",index:0,id:e,showAll:!0,children:h.map(((e,n)=>(0,c.O)(e,n)))})})})})]})}},5842:(e,n,i)=>{i.d(n,{O:()=>D});var t=i(93462),a=i(38762),s=i(98900),r=i(16428),o=i(85802),l=i(65798),d=i(53181),c=i(50959),m=i(49626),u=i(70769),p=i(42189),k=i(74822),f=i(64116),g=i(94989);const x="NyZJZ8IWZ7Pxvy3yA81D";var b=i(11527);const S=({title:e,uri:n,images:i,href:t,index:s,ubiId:r})=>{const{spec:o,logger:l}=(0,p.fU)(u.createDesktopCategoryCardEventFactory,{data:{position:s,identifier:r}}),d=(0,c.useCallback)((()=>{const e=(0,a.EC)(t)?.toURI();e&&l.logInteraction(o.hitUiNavigate({destination:e}))}),[l,o,t]),S=(0,p.Wi)(o);return(0,b.jsx)(g.Link,{to:t,onClick:d,ref:S,children:(0,b.jsx)(k.C,{index:s,onClick:d,headerText:e,featureIdentifier:"unknown",isPlayable:!1,delegateNavigation:!0,uri:n,className:x,renderCardImage:()=>(0,b.jsx)(f.x,{images:i,FallbackComponent:e=>(0,b.jsx)(m.U,{iconSize:64,...e})})})})};var N=i(16955),v=i(4919),h=i(34315),y=i(11411),j=i(78710),w=i(15928),I=i(40459),F=i(75661),C=i(27718),_=i(70860),P=i(89862),T=i(84986);function D(e,n){switch(e.content.__typename){case"AlbumResponseWrapper":case"ArtistResponseWrapper":case"EpisodeOrChapterResponseWrapper":case"PlaylistResponseWrapper":case"PodcastOrAudiobookResponseWrapper":case"TrackResponseWrapper":case"UserResponseWrapper":case"BrowseXlinkResponseWrapper":case"BrowseSectionContainerWrapper":case"MerchResponseWrapper":case"ArtistConcertsResponseWrapper":return function(e,n,i){if("GenericError"===e.__typename||"NotFound"===e.__typename||"RestrictedContent"===e.__typename)return null;const c=(0,_._k)(e);switch(e.__typename){case"Album":return(0,b.jsx)(r.r,{uri:e.uri,name:e.name,images:c,sharingInfo:null,artists:(0,C.BH)(e.artists),index:n},e.uri);case"Artist":return(0,b.jsx)(o.I,{uri:e.uri,name:e.profile.name,images:c,index:n},e.uri);case"Audiobook":return(0,b.jsx)(d.c,{uri:e.uri,signifierText:e.accessInfo?.signifier?.text??void 0,name:e.name,images:c,authorName:e.authors?.map((e=>e?.name)).join(s.ag.getSeparator())??"",index:n},e.uri);case"Chapter":return(0,b.jsx)(N.B,{uri:e.uri,name:e.name,images:c,showImages:c,description:"",durationMilliseconds:e.duration.totalMilliseconds,releaseDate:(0,C.Bq)(e.releaseDate),resume_point:{resume_position_ms:e.playedState.playPositionMilliseconds,fully_played:e.playedState.state===F.sY.Completed},isExplicit:(0,C.sW)(e.contentRating),is19PlusOnly:(0,C.R7)(e.contentRating),sharingInfo:null,index:n},e.uri);case"Episode":return(0,b.jsx)(N.B,{uri:e.uri,name:e.name,images:c,showImages:(0,_.Cn)(e),description:e.description??"",durationMilliseconds:e.duration.totalMilliseconds,releaseDate:(0,C.Bq)(e.releaseDate),resume_point:{resume_position_ms:e.playedState.playPositionMilliseconds,fully_played:e.playedState.state===F.sY.Completed},isExplicit:(0,C.sW)(e.contentRating),is19PlusOnly:(0,C.R7)(e.contentRating),sharingInfo:null,index:n},e.uri);case"Playlist":{let i="";return"User"===e.ownerV2.data.__typename&&(i=e.ownerV2.data.name),(0,b.jsx)(h.Z,{uri:e.uri,name:e.name,images:c,description:e.description,authorName:i,index:n,isPlayable:!(0,I.T)(e?.attributes)},e.uri)}case"Podcast":return(0,b.jsx)(j._,{uri:e.uri,name:e.name,images:c,publisher:e.publisher?.name??"",sharingInfo:null,mediaType:(0,C.x7)(e.mediaType),index:n},e.uri);case"Track":return(0,b.jsx)(w.G,{uri:e.uri,name:e.name,images:c,artists:(0,C.mQ)(e.artists),album:e.albumOfTrack?{uri:e.albumOfTrack.uri,name:e.albumOfTrack.name}:null,isExplicit:(0,C.sW)(e.contentRating),is19PlusOnly:(0,C.R7)(e.contentRating),sharingInfo:null,index:n},e.uri);case"User":return(0,b.jsx)(y.P,{uri:e.uri,name:e.name,images:c,index:n},e.uri);case"BrowseSectionContainer":return(0,b.jsx)(T.p,{title:e.data?.cardRepresentation?.title?.transformedLabel??"",pageId:"search",href:(0,P.t1)(i),color:e.data?.cardRepresentation?.backgroundColor?.hex,imageUrl:c[0]?.url,ubiId:i,index:n},i);case"BrowseSpacesHub":return(0,b.jsx)(T.p,{title:e.title?.transformedLabel??"",pageId:"search",href:(0,P.wJ)(e.spaceId),color:e.backgroundColor?.hex,imageUrl:c[0]?.url,ubiId:i,index:n},i);case"BrowseClientFeature":return(0,b.jsx)(S,{uri:i,title:e.title?.transformedLabel??"",href:`/${(0,a.EC)(e?.featureUri,{parseUnknown:!0})?.toURLPath()}`,images:e.iconOverlay?.sources??[],ubiId:i,index:n},i);case"Merch":return(0,b.jsx)(v.T,{name:e.name,uri:e.uri,href:e.url||e.uri,index:n,images:c,price:e.price||"",artists:e.artists,salePrice:e.salePrice,label:e.label},i);case"ArtistConcerts":{const t=e.mainArtist.data;return"Artist"!==t.__typename?null:(0,b.jsx)(l.Z,{uri:i,name:t.profile.name,images:c,description:s.ag.get("concerts.count",e.concerts.totalCount),index:n},i)}case"BrowseExternalHref":return null;default:return(0,t._)(e),null}}(e.content.data,n,e.uri);case"UnknownType":case"NoContent":case"ConcertResponseWrapper":break;default:(0,t._)(e.content)}return null}},99952:(e,n,i)=>{i.d(n,{X:()=>m});i(95101),i(2178),i(4269),i(64011);var t=i(50959),a=i(39017),s=i(80961),r=i(49450),o=i(93462),l=i(2893),d=(i(45963),i(47895));const c={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"browseSection"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"pagination"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"PaginationInput"}}}},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"uri"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"ID"}}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"browseSection"},arguments:[{kind:"Argument",name:{kind:"Name",value:"input"},value:{kind:"ObjectValue",fields:[{kind:"ObjectField",name:{kind:"Name",value:"sectionPagination"},value:{kind:"Variable",name:{kind:"Name",value:"pagination"}}},{kind:"ObjectField",name:{kind:"Name",value:"sectionUri"},value:{kind:"Variable",name:{kind:"Name",value:"uri"}}}]}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"__typename"}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"BrowseSection"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"data"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"__typename"}},{kind:"Field",name:{kind:"Name",value:"title"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"transformedLabel"}}]}},{kind:"Field",name:{kind:"Name",value:"subtitle"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"transformedLabel"}}]}}]}},{kind:"Field",name:{kind:"Name",value:"sectionItems"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"totalCount"}},{kind:"Field",name:{kind:"Name",value:"pagingInfo"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"nextOffset"}}]}},{kind:"Field",name:{kind:"Name",value:"items"},selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"browseItem"}}]}}]}}]}}]}}]}},...d.H5.definitions,...d.RL.definitions,...d.X6.definitions,...d.N9.definitions,...d.K1.definitions,...d.nE.definitions,...d._C.definitions,...d.Tf.definitions,...d.tl.definitions,...d.dV.definitions,...d.qJ.definitions,...d.YJ.definitions,...d.zZ.definitions,...d.Fk.definitions,...d.Go.definitions,...d.dK.definitions,...d.$z.definitions]},m=e=>{const{request:n}=(0,t.useContext)(s.Ax),{data:i,isLoading:d,error:m,fetchNextPage:u}=(0,a.useInfiniteQuery)(["browse","section",e,{numberOfItems:20}],(async({pageParam:i=0})=>(0,r.J)(n,c,function(e,n,i){return{pagination:{offset:n,limit:i},uri:e}}(e,i,20))),{cacheTime:l.ws,staleTime:l._p,getNextPageParam:e=>{if("BrowseSection"===e?.data?.browseSection?.__typename){return e.data.browseSection.sectionItems.pagingInfo.nextOffset&&e.data.browseSection.sectionItems.pagingInfo.nextOffset>0?e.data.browseSection.sectionItems.pagingInfo.nextOffset:void 0}}}),p=(0,t.useCallback)((async()=>{await u()}),[u]);return{section:(0,t.useMemo)((()=>i?.pages?i.pages.reduce(((e,n)=>{if(!n?.data?.browseSection)return e;switch(n.data.browseSection.__typename){case"BrowseSection":return null===e?function(e){if("object"!=typeof e||null===e)return e;if(window.structuredClone)return window.structuredClone(e);return JSON.parse(JSON.stringify(e))}(n.data.browseSection):(e.sectionItems.items=[...e.sectionItems.items,...n.data.browseSection.sectionItems.items],e);case"GenericError":case"NotFound":return e;default:return(0,o._)(n.data.browseSection),e}}),null):null),[i?.pages]),error:m,loading:d,fetchNextItems:p}}}}]);
//# sourceMappingURL=browse-v2.js.map