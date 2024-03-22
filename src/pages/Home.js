import React, { useEffect, useState } from 'react';
import {getDocs, collection, deleteDoc, doc} from 'firebase/firestore';
import {auth, db} from "../firebase-config";

const Home = ({Auth}) => {
  const [storyLists, setStoryList] = useState([]);
  const storysCollection = collection(db, "storys");


  useEffect(()=>{
    const getStorys = async () => {
      const data = await getDocs(storysCollection);
      setStoryList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id})));
    };
    getStorys();
  },[deleteStory]);

  const deleteStory = async (id) => {
    const storyDoc = doc(db, "storys", id);
    await deleteDoc(storyDoc);
  };

  return (
    <div className='homePage'>
      {storyLists.map((story) => {
        return (
        <div className='story'>
          <div className='storyHeader'>
            <div className='title'>
              <h1>{story.title}</h1>
            </div>
            <div className='deleteStory'>
             {Auth && story.author.id === auth.currentUser.uid && ( 
             <button 
              onClick={() => {
                deleteStory(story.id);
              }}>
                {""}
                &#128465;
                </button>
             )}
            </div>
          </div>
          <div className='storyTextContainer'>
            {story.storyText}
          </div>
         {/** <h3>@{story.author.name}</h3>*/} 
        </div>
        );
      })}      
    </div>
  );
}

export default Home;
