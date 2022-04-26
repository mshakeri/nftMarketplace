import React, { useState, useEffect} from 'react'
import { ethers } from "ethers"
import { Form } from 'react-bootstrap'
import { create as ipfsHttpClient } from 'ipfs-http-client'
import { Row, Col, Card, Button, Nav } from 'react-bootstrap'
import {  Link} from "react-router-dom";

var itemImags = []

const Generate_2 = ({ marketplace, nft, }) => {
  const [searchText, setSearchText] = useState(null)
  const [items, setItems] = useState([])
  const [successed, setText] = useState("");
  

  const generateNFT = async () => {
    if (!searchText) return

    
    const requestOptions = {
      mode: 'no-cors',
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({ search:  searchText})
  };

    const uri = `http://127.0.0.1:5000/ai_generator`
    fetch(uri, requestOptions)
    .then(response => response.json())
    .then(data => {
      loadNFTImages(data);
    });
  }

  const loadNFTImages = async (data) => { 

    console.log(data.items);
    itemImags = data.items;
    console.log(itemImags.length)
    
    setItems(itemImags)
    setText("NFT images generated!")
  }

  const listNFTImage = async (item) => {
    //await (await marketplace.purchaseItem(item.itemId, { value: item.totalPrice })).wait()
    //loadMarketplaceItems()
  }

  return (
    <div className="container-fluid mt-5">
      <div className="row">
        <main role="main" className="col-lg-12 mx-auto" style={{ maxWidth: '1000px' }}>
          <div className="content mx-auto">
            <Row className="g-4">
              <Form.Control onChange={(e) => setSearchText(e.target.value)} size="lg" required type="text" placeholder="Search Keywords" />
              <div className="d-grid px-0">
                <Button onClick={generateNFT} variant="primary" size="lg">
                  Generate!
                </Button>
              </div>
            </Row>
          </div>
        </main>
        <h3>   </h3>
        <h3>   </h3>
        <h3>{successed}</h3>
      </div>
    </div>
  );
}

export default Generate_2