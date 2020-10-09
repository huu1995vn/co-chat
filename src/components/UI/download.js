import React from "react";

export default () => {

    return (
        <section className="section section-app-download-bar">
            <div className="container">
                <div className="app-download-bottom">
                    <div className="app-list">
                        <span className=" app-item label">Tải CoChat ngay</span>
                        <a className="app-item" href="/" title="Web Browser">
                            <i className="fal fa-globe" /> Web Browser</a>
                        <a className="app-item" href="/" title="iPhone | iPad">
                            <i className="fab fa-apple" />iPhone | iPad</a>
                        <a className="app-item" href="/" title="Android">
                            <i className="fab fa-android" />Android</a>
                    </div>
                </div>
            </div>
        </section>
    )
}
