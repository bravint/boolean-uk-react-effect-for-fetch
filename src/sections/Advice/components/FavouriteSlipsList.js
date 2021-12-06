const FavouriteSlipsList = ({ favourite }) => {
    return (
        <>
            <h3>Favourite Advice Slips</h3>
            <ul>
                {favourite.map((element) => {
                    return <li>{element}</li>;
                })}
            </ul>
        </>
    );
};

export default FavouriteSlipsList;
