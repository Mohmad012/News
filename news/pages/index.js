import styles from '../styles/Home.module.css'
import axios from 'axios';
import { useEffect , useState } from 'react';
import Posts from './posts'

export default function Home() {

  const data = "http://80.240.21.204:1337/news?skip=12&limit=10";
  const [ dataNews , setDataNews ] = useState([]);

  useEffect(()=>{
    axios.get("http://80.240.21.204:1337/news?skip=12&limit=10").then(res => {
      const news = res.data.news;
      setDataNews(news)
    }).catch(error => {
            console.log(error);
        })

  },[])

  console.log( ' From data News Now', typeof  dataNews , dataNews )

  const dataNewses = dataNews.map(allOfdata => {
      if (allOfdata.keywords.length) {
          allOfdata.keywords.map(oneKey => {
              return(
                  <Posts
                    key={allOfdata._id}
                    titlePost={allOfdata.source.title}
                    logoPost={allOfdata.source.url}
                    infoPost={allOfdata.title}
                    datePost={allOfdata.created_at}
                    keywordsOfPosts={oneKey.name}              
                  />
              )
              console.log(oneKey)
            })

      }else{

          return(
              <Posts
                key={allOfdata._id}
                titlePost={allOfdata.source.title}
                logoPost={allOfdata.source.url}
                infoPost={allOfdata.title}
                datePost={allOfdata.created_at}             
              />
          )
      }
    })

  console.log(dataNewses)


  return (

    <div className={styles.container}>
      <div className="contentNews">
        <div className="container">
          <div className="BoxPosts">
            <div className="left bg-white"><div></div></div>
            <div className="right bg-white">
              <div></div>
            </div>
          </div>
          <div className={styles.ContentCenter}>
            {dataNewses}
          </div>
        </div>
      </div>
    </div>
  )
}
