export function IframeYT({iframeLinkYT}){
    return(
        <section className="iframeYT">
            <iframe
            allowFullScreen
            src={iframeLinkYT} frameborder="0">
            </iframe>
        </section>
    )
}