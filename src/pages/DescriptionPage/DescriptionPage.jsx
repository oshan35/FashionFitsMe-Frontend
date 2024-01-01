import React from "react";
import { Flex } from "antd";
import Navbar from '../../components/navbar/navbar';
import Footer from '../../components/footer/Footer';


const DescriptionPage = ({image, name,price}) => {
    return (
        <>
            <Navbar/>
            <Flex vertical="vertical" className="main-container">
                <Flex horizontal="horizontal" className="description-container">
                    <Flex className="image-container">
                        <img src={image}/>
                    </Flex>
                    <Flex vertical="vertical" className="details-container">
                        <h1>{name}</h1>
                        <p> {price}</p>
                        <p>size</p>
                        <Flex horizontal="horizontal">
                        <Button type="primary">Primary</Button>
                            <Button type="primary">Primary</Button>
                            <Button type="primary">Primary</Button>
                            <Button type="primary">Primary</Button>
                        </Flex>
                    </Flex>
                </Flex>
                <Flex>

                </Flex>
            </Flex>
        </>
    );
}