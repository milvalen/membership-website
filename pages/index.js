//pages/index.js
//other imports here
import { useRouter } from "next/router";
import {Footer, Hero, Persuade, Testimonies} from "@/ui-components";
import Layout from "@/components/Layout";
import {Flex, View} from "@aws-amplify/ui-react";
function index() {
    const router = useRouter();
    return (
        <Layout
            handleClick={() => {
                router.push("/post");
            }}
            authText="Sign Up"
            username="none"
        >
            <View marginBottom="135px">
                <Hero handleClick={() => {
                    router.push("/post");
                }} />
            </View>
            <View>
                <Testimonies />
            </View>
            <Flex justifyContent={"center"}>
                <Persuade banner="https://i.imgur.com/MxbD3N4.png" />
            </Flex>
            <View marginTop="50px" marginBottom="50px">
                <Footer />
            </View>
        </Layout>
    );
}
export default index;