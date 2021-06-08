import React, {Suspense, useRef} from 'react'
import styled, {keyframes} from 'styled-components';
import {Canvas, useFrame} from '@react-three/fiber';
import {useGLTF, OrbitControls, Stars, Loader, Preload} from '@react-three/drei';
import { motion } from 'framer-motion';


const floating1 = keyframes`
    0% { transform: translate(0,  0px); }
    50%  { transform: translate(0, 18px); }
    100%   { transform: translate(0, -0px); }
`;
const floating2 = keyframes`
    0% { transform: translate(0,  9px); }
    50%  { transform: translate(0, 0px); }
    100%   { transform: translate(0, 9px); }
`;



const Section = styled.div`
    z-index: -1;
    position: absolute;
    top: 0;
    background: black;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    h1{
        top: 60%;
        font-size: 5rem;
        color: White;
        z-index: 5;
        position: absolute;
        text-align: center;
    }
    p{  
        top: 85%;
        color: white;
        position: absolute;
        text-align: center;
        font-size: 2rem;
        animation: ${floating2} 3s ease-in-out infinite;
    }
`;



const Model = () => {
    const mesh = useRef();
    useFrame(()=>{
        mesh.current.rotation.y+=0.001;
    });
    const gltf = useGLTF(`/scene.gltf`, true);

    return (
        <mesh
        ref={mesh}
        position={[0, 0, -200]}
        >
        <primitive object={gltf.scene} dispose = {null} />
        </mesh>
    )
}

function Landing() {

            
        
    return (
        <Section>
            <motion.h1
            initial={{opacity: 0}}
            animate={{opacity: 1, transition: {duration: "10"}}}
            >Explore</motion.h1>
            <motion.p
            initial={{opacity: 0}}
            animate={{opacity: 1, transition: {duration: "15"}}}
            >(Scroll)</motion.p>

            <Canvas>
            <Stars />
            
                <ambientLight intensity={1} />
                <spotLight intensity={1} position={[0, 250, 0]} />
                <directionalLight intensity={50} position={[200, 100, 0]} />
                <Suspense fallback={null}>
                    <Model />
                    <Preload all />
                </Suspense>
            </Canvas>
            <Loader />
        </Section>
    )
}


export default Landing
