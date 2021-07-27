import React from 'react';

const SellerForm = () => {
    return (
        <div>
            <h2 className="text-center p-4">Contact Seller</h2>
            <div style={{borderRadius:"20px"}} className="p-5 shadow bg-white">
                <form action="https://formspree.io/f/xrgrekdq" method='POST'>
                    <div className="form-group p-3">
                        <input type="text" className="form-control p-3" placeholder="Email Address *" />
                    </div>
                    <div className="form-group p-3">
                        <input type="text" className="form-control p-3" placeholder="Subject *" />
                    </div>
                    <div className="form-group p-3">
                        <textarea name="message" className="form-control p-3" id="" placeholder="Message *"></textarea>
                    </div>
                    <div className="form-group text-center">
                        <button type="submit" className="btn btn-primary btn-lg submitButton"> Send Message </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SellerForm;