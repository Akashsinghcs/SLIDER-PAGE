import React from "react";
import { useGetDataFromSheet } from "../../api";
import Stories from "react-insta-stories";
import Slide from "../slide";

export default function Home() {
  const { data: animalList = [] } = useGetDataFromSheet();

  const animalStoryList = React.useMemo(() => {
    return animalList.map(animal => {
      return {
        duration: 10000,
        content: () => <Slide animal={animal}></Slide>
      };
    });
  }, [animalList]);

  console.log(animalList);
  return (
    <div>
      {animalStoryList.length > 0 && (
        <Stories
          keyboardNavigation={true}
          stories={animalStoryList}
          defaultInterval={1500}
          width={432}
          height={768}
        />
      )}
    </div>
  );
}
