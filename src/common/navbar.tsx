import React from "react";
import { Box, Divider, Flex, Heading, Link } from "@chakra-ui/react";
import { useRouter } from "next/router";

const Navbar: React.FC<{}> = () => {
    const router = useRouter();
    
    return (
        <>
            <Flex justify="space-between" m={4}>
                <Heading onClick={() => router.push('/')} as="button">
                    Lumia
                </Heading>
            </Flex>
        </>
    )
    
}

export default Navbar;