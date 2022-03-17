import React, { useEffect, useState } from 'react';
import { Post } from '../types';
import { getPosts } from '../client/postHandler';
import { Container, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import FilterBar from '../features/homepage/FilterBar';
import Footer from '../features/homepage/Footer';
import Header from '../features/homepage/Header';
import RecommendedTicketer from '../features/homepage/RecommendedTicketer';
import Menylinje from '../features/Menylinje';
import FilteredTicketer from '../features/homepage/FilteredTicketer';
import Category from '../features/homepage/Category';
import Concert from '../images/konsert.png';
import Sport from '../images/sport.png';
import Teater from '../images/teater.png';

function Homepage() {

  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [masterPosts, setMasterPosts] = useState<Post[]>([]);
  const [showPosts, setShowPosts] = useState<Post[]>([]);
  const [filterList, setFilterList] = useState<any[]>([]);

  async function getAllPosts() {
    try {
      setMasterPosts(await getPosts());
    } catch (error: any) {
      console.error(error);
    }
  }

  function handleFilter() {
    const length = filterList.length;
    if (length > 0) {  
      for (let i = 0; i < length; i++) {
        if (i === 0){
          setShowPosts(filterList[i](masterPosts));
        }
        else{
          setShowPosts(filterList[i](showPosts));
        }
      }
      // hvis første -> gi master post, set showpost til output fra func
      // hvis ikke -> ta inn showpost, set showpost til output
    }
  }
  useEffect(() => {
    handleFilter();
  }, []);

  /** CATEGORY FILTERS */
  function categoryFilterConcert(liste:Array<Post> ): Array<Post>{
    const filtered = [];
    for (const p of liste) {
      if (p.category === "Concert") {
        filtered.push(p);
      }
    } 
    return filtered;
  }

  function categoryFilterShow(liste:Array<Post> ): Array<Post>{
    const filtered = [];
    for (const p of liste) {
      if (p.category === "Show") {
        filtered.push(p);
      }
    } 
    return filtered;
  }

  function categoryFilterSport(liste:Array<Post> ): Array<Post>{
    const filtered = [];
    for (const p of liste) {
      if (p.category === "Sport") {
        filtered.push(p);
      }
    } 
    return filtered;
  }
  function categoryFilterOther(liste:Array<Post> ): Array<Post>{
    const filtered = [];
    for (const p of liste) {
      if (p.category === "Other") {
        filtered.push(p);
      }
    } 
    return filtered;
  }
  
  function addToFilterList(func:any) {
    /** Hvis tom liste 
     * - legg til i liste
     *  
     * Hvis ikke tom liste
     * - sjekk om den allerede er i lista
     *    - isåfall fjern fra lista
     * - hvis ikke i lista
     *    - legg til i lista
     */
    if (filterList.length === 0){
      setFilterList([func]);
      console.log("lagt til i lista");
    } else {
      console.log("mer enn 0 i liste");
      for (let i = 0; i < filterList.length; i++) {
        if (filterList[i].name === func.name) {
          const c = filterList.splice(i, 0);
          setFilterList(c);
        } else {
          setFilterList([func, ...filterList]);
        }
      }
      

      /** if (!filterList.includes(func)) {
        console.log(func.name);
        setFilterList([func, ...filterList]);
     } else {
        const i = filterList.indexOf(func);
        console.log(i);
        const c = filterList.splice(i, 0);
        setFilterList(c);
     } */
    }
    console.log(filterList);
  }

  return (
    <div>
      <Menylinje />
      <div style={{ marginLeft: '133px' }}>
        <Header />
        <Container>
          <Row>
              <Category picture={Concert} name='KONSERT' active={(selectedCategory === "Concert") ? true : false} onClick={() => addToFilterList(categoryFilterConcert)}/>
              <Category picture={Sport} name='SPORT' active={(selectedCategory === "Sport") ? true : false} onClick={() => addToFilterList(categoryFilterSport)}/>
              <Category picture={Teater} name='TEATER/SHOW' active={(selectedCategory === "Show") ? true : false} onClick={() => addToFilterList(categoryFilterShow)}/>
              <Category picture={"https://pic.onlinewebfonts.com/svg/img_520908.png"} name='ANNET'  active={(selectedCategory === "Other") ? true : false} onClick={() => addToFilterList(categoryFilterOther)}/>
          </Row>
        </Container>
        
      
        {/** {(selectedCategory === "") ? <RecommendedTicketer/> : <FilteredTicketer category={selectedCategory}/>} */}

        <Footer />
      </div>
    </div>
  );
}

export default Homepage;
