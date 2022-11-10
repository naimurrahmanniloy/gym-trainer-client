import React from 'react';

const Blogs = () => {
    return (
        <div>
            <div className="hero mb-9 bg-base-200">
                <div className="hero-content text-center">
                    <div >
                        <h1 className="text-5xl font-bold">Differences between SQL vs NoSQL:
                        </h1>
                        <p className="py-6">1.SQL databases are relational, NoSQL databases are non-relational. 2.SQL databases use structured query language and have a predefined schema. NoSQL databases have dynamic schemas for unstructured data. 3.SQL databases are vertically scalable, while NoSQL databases are horizontally scalable. 4. SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores. 5.SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.

                        </p>

                    </div>
                </div>
            </div>
            <div className="hero mb-9 bg-base-200">
                <div className="hero-content text-center">
                    <div>
                        <h1 className="text-5xl font-bold">What is JWT, and how does it work?
                        </h1>
                        <p className="py-6">JWT, or JSON Web Token, is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued.
                            <br />

                            JWTs differ from other web tokens in that they contain a set of claims. Claims are used to transmit information between two parties. What these claims are depends on the use case at hand. For example, a claim may assert who issued the token, how long it is valid for, or what permissions the client has been granted. A JWT is a string made up of three parts, separated by dots (.), and serialized using base64. In the most common serialization format, compact serialization, the JWT looks something like this: xxxxx.yyyyy.zzzzz. Once decoded, you will get two JSON strings: The header and the payload. The signature. The JOSE (JSON Object Signing and Encryption) header contains the type of token — JWT in this case — and the signing algorithm. The payload contains the claims. This is displayed as a JSON string, usually containing no more than a dozen fields to keep the JWT compact. This information is typically used by the server to verify that the user has permission to perform the action they are requesting. There are no mandatory claims for a JWT, but overlaying standards may make claims mandatory. For example, when using JWT as bearer access token under OAuth2.0, iss, sub, aud, and exp must be present. some are more common than others. The signature ensures that the token hasn’t been altered. The party that creates the JWT signs the header and payload with a secret that is known to both the issuer and receiver, or with a private key known only to the sender. When the token is used, the receiving party verifies that the header and payload match the signature.</p>

                    </div>
                </div>
            </div>
            <div className="hero mb-9 bg-base-200">
                <div className="hero-content text-center">
                    <div >
                        <h1 className="text-5xl font-bold">How NodeJS handle multiple client requests?
                        </h1>
                        <p className="py-6">NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them. EventLoop is the listener for the EventQueue. If NodeJS can process the request without I/O blocking then the event loop would itself process the request and sends the response back to the client by itself. But, it is possible to process multiple requests parallelly using the NodeJS cluster module or worker_threads module.

                        </p>

                    </div>
                </div>
            </div>
            <div className="hero mb-9 bg-base-200">
                <div className="hero-content text-center">
                    <div >
                        <h1 className="text-5xl font-bold">What is the difference between javascript and NodeJS?
                        </h1>
                        <p className="py-6">1. Javascript is a programming language that is used for writing scripts on the website . NodeJS is a Javascript runtime environment. <br />

                            2.Javascript can only be run in the browsers.We can run Javascript outside the browser with the help of NodeJS. <br />

                            3.Javascript is basically used on the client-side.NodeJS is mostly used on the server-side.
                            <br />
                            4.Javascript is capable enough to add HTML and play with the DOM.Nodejs does not have capability to add HTML tags.
                            <br />
                            5.Javascript is used in frontend development.Nodejs is used in server-side development.</p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;