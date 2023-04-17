import React from "react";
import Offers from '../data/data.home'
import { Link } from 'react-router-dom';



const Grid = () => {
    let Offer = Offers.map((offer)=>{
        return(
            <div class="grid-item">
                <img src={offer.image} alt="pepe the frog" className="img-grid"></img>
                <h2>{offer.heading}</h2>
                <p>{offer.description}</p>
                <p><Link to="/Invest">Invest right now!</Link></p>
            </div>

        );
    });

    return(
    <div>
    <main id="discover-section">
        <h2>Discover</h2>
    <p>Explore the latest news, tips, and insights on personal finance.</p>
    <ul>
      <li>
        <a href="https://www.forbes.com/advisor/ca/credit-cards/best/cash-back/">
          <h3>How to Start Investing for Beginners</h3>
          <img src="pepe-gains.jpeg" alt="Investing for beginners"></img>
          <p>Learn the basics of investing and start noticing the gains.</p>
        </a>
      </li>
      <li>
        <a href="https://www.vacu.org/learn/financial-management/saving-and-investing/10-tips-for-saving-money">
          <h3>10 Ways to Save Money on Your Monthly Bills</h3>
          <img id = "gains"src="pepe-super-gain.jpeg" alt="Saving money on monthly bills"></img>
          <p>Discover simple tips to reduce your expenses and increase your savings.</p>
        </a>
      </li>
      <li>
        <a href="https://www.forbes.com/advisor/ca/credit-cards/best/cash-back/">
          <h3>The Best Credit Cards for Cashback Rewards</h3>
          <img src="pepe-cigar.jpeg" alt="Cashback credit cards"></img>
          <p>Find the perfect credit card to earn cashback rewards on your purchases.</p>
        </a>
      </li>
    </ul>
    </main>

    <div className="grid-container">
      {Offer}
    </div>
    </div>


    );
}

export default Grid;