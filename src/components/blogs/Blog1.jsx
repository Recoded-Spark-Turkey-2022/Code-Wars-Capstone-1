import Subscribeform from "./Subscribe";
import BlogData from './Blogdata';
import Blogarticle from "./Blogarticle";
import Recommends from "./Recommends";



function Blog1 (){

    const Article = BlogData[1];
    return(
        <>
    <Blogarticle  imageurl={Article.imageurl} header={Article.header} paragraph={Article.paragraph} header1={Article.header1} paragraph2={Article.paragraph2}
    paragraph3={Article.paragraph3} paragraph4={Article.paragraph4} />
        <Subscribeform />
        <Recommends />
        </> 
    )
}

export default Blog1