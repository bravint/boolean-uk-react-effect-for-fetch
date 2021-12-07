import { useEffect, useState } from "react";

import AdviceSlip from "./components/AdviceSlip";
import FavouriteSlipsList from "./components/FavouriteSlipsList";

function AdviceSection() {
    const [advice, setAdvice] = useState("");
    const [trigger, setTrigger] = useState(true);
    const [favourite, setFavourite] = useState([]);

    const addFavourite = (advice) =>
        setFavourite([...favourite, advice.slip.advice]);

    useEffect(() => {
        const fetchAdvice = async () => {
            try {
                const response = await fetch(
                    "https://api.adviceslip.com/advice"
                );
                const data = await response.json();
                setAdvice(data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchAdvice();
    }, [trigger]);

    if (advice === "") {
        return null;
    } else {
        return (
            <section>
                <h2>Advice Section</h2>
                <section className="advice-slip">
                    <AdviceSlip
                        advice={advice}
                        trigger={trigger}
                        setTrigger={setTrigger}
                        addFavourite={addFavourite}
                    />
                </section>
                <section className="favourtite-slips-list">
                    <FavouriteSlipsList favourite={favourite} />
                </section>
            </section>
        );
    }
}

export default AdviceSection;
