import React from 'react';

function Favorites({ coins, favoriteCoins }) {
    const filteredCoins = favoriteCoins.filter((coin) =>
        coin.name.toLowerCase());

    return (
        <div>
            <h2>Favorieten</h2>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredCoins.map((coin) => (
                        <tr key={coin.id}>
                            <td>{coin.name}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Favorites;