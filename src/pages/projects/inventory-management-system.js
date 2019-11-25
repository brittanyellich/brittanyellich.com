import React from 'react'
import { Layout } from '../../components/common'
import Button from '../../components/Button'

const QuoteGenerator = () => (
    <Layout>
        <div className="container">
            <article className="content" style={{ textAlign: `center` }}>
                <h1 className="content-title">Inventory Management System</h1>
                <img src="https://brittanyellichpublic.s3-us-west-2.amazonaws.com/inventorymanagementsystemimage.PNG" alt="image of inventory management system project" />
                <a href="https://github.com/b-marie/InventoryManagementSystem">
                    <Button buttonText="View project" />
                </a>
                <hr></hr>
                <p><span className="content-purpose">Purpose: </span>This project was a school project that I really enjoyed putting together. It was my first exposure to creating a desktop application using Java.</p>
                <p><span className="content-purpose">Description: </span>Project to add, store, and track parts and products in an inventory management system.</p>
                <p><span className="content-purpose">Technologies Used: </span>Java, JavaFx</p>
            </article>
        </div>
    </Layout>
)

export default QuoteGenerator
