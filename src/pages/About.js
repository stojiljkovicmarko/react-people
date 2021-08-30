import React, { Fragment } from "react";

import { Header } from "../components/Header/Header.jsx";
import { Footer } from "../components/Footer/Footer.jsx";

import "./About.css";

const About = () => {

    return (
        <Fragment>
            <Header />
            <div className="about-div">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi faucibus metus ante, vitae luctus tellus iaculis in. Pellentesque lectus leo, vulputate eget sollicitudin at, cursus hendrerit ipsum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed malesuada lacinia erat et tincidunt. Pellentesque non felis non massa porta ultricies. Etiam ex tortor, accumsan vel elementum sed, dictum at sem. Ut finibus scelerisque venenatis. Suspendisse potenti. Donec congue est ut pretium interdum. Donec at risus dolor. Curabitur non libero eget nibh feugiat feugiat.
                </p>

                <p>
                    Integer sagittis, odio id venenatis tincidunt, justo odio pharetra tellus, non efficitur quam tellus porta massa. In mattis, dui at venenatis ultricies, mauris est varius risus, at auctor mi velit a purus. Ut tempor mi sit amet lectus ornare, ac sagittis tortor sollicitudin. Suspendisse id leo dictum, egestas nisl vel, pretium elit. Pellentesque eleifend ex in venenatis tempor. Etiam a diam at massa faucibus tempus. Maecenas vel sodales tellus. Nulla facilisi. Proin a quam in ante egestas faucibus. Nulla facilisi. Cras sagittis dapibus sagittis. Sed venenatis est purus, convallis porta erat tristique vel. Aliquam a libero felis. Sed fermentum finibus pellentesque. Sed non neque sit amet lacus iaculis cursus at non lectus.
                </p>

                <p>
                    Aenean rutrum, odio vitae pulvinar ornare, ligula purus gravida magna, nec cursus nisi odio varius eros. Proin id lectus ut diam tincidunt lobortis. Maecenas id leo in mi blandit feugiat vitae quis metus. Suspendisse bibendum tincidunt nibh, quis malesuada ante scelerisque id. Maecenas lacus felis, bibendum at enim non, consequat ornare ligula. In tortor magna, sollicitudin at justo ut, blandit condimentum nisl. Donec eget lorem lobortis, lobortis neque et, condimentum enim. Quisque cursus, est eu faucibus egestas, felis urna varius elit, at tempor nisl est ut purus. Morbi malesuada vestibulum urna, vel accumsan purus vestibulum nec. Cras sed velit consectetur, tempus eros sit amet, faucibus diam. Vestibulum congue, elit non malesuada facilisis, nibh lacus tempor sapien, eu tempus nisi orci id lectus. Sed volutpat neque a nisl porttitor pellentesque. Donec id turpis mi.
                </p>

            </div>
            <Footer />
        </Fragment>
    );
}

export default About;