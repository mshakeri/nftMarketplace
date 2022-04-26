import React, { useState, useEffect } from 'react'
import { ethers } from "ethers"
import { Row, Col, Card, Button, Nav } from 'react-bootstrap'
import {items} from './Generate.js';
import {  Link} from "react-router-dom";

var itemImags = []

const NFTList = ({ marketplace, nft }) => {
  const [loading, setLoading] = useState(true)
  const [items, setItems] = useState([])

  const uri = `http://127.0.0.1:5000/get-nftresults`
  useEffect(() => {

  },[])
  
    useEffect(() => {
      fetch(uri)
      .then(response => response.json())
      .then(data => setItems(data.items));
    },[])

    const listNFTImage = async (data) => { 
      //await (await marketplace.purchaseItem(item.itemId, { value: item.totalPrice })).wait()
      //loadMarketplaceItems()
    }

  return (
    <div className="flex justify-center">
        {items.length > 0 ?
          <div className="px-5 container">
            <Row xs={1} md={2} lg={4} className="g-4 py-5">
              {items.map((item, idx) => (
                <Col key={idx} className="overflow-hidden">
                  <Card>
                    <Card.Img variant="top" src={item.address} />
                    <Card.Body color="secondary">
                      <Card.Title>{item.name}</Card.Title>
                    </Card.Body>
                    <Card.Footer>
                      <div className='d-grid'>
                        <Button onClick={() => listNFTImage(item)} variant="primary" size="lg">
                        <Nav.Link as={Link} to="/create"></Nav.Link> List!
                        </Button>
                      </div>
                    </Card.Footer>
                  </Card>
                </Col>
              ))}
            </Row>
          </div>
          : (
            <main style={{ padding: "1rem 0" }}>
              <h2>No listed NFT Images</h2>
            </main>
          )}
      </div>
  );
}
export default NFTList