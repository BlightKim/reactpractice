import {useContext, useEffect, useState} from "react";
import {DiaryStateContext} from "../App";

const useDiary = (id) => {
    const data = useContext(DiaryStateContext);
    const [diary, setDiary] = useState();
    const navigate =

    useEffect(() => {
        const matchDiary = data.find((it) => String(it.id) === String(id));

        if(matchDiary) {
            setDiary(matchDiary);
        }
    }, [id, data]);
    return diary;
};

export default useDiary;