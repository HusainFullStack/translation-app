import { useEffect } from "react";

function App() {
  useEffect(() => {
    if (!window.googleTranslateElementInit) {
      window.googleTranslateElementInit = () => {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: "en",
            layout:
              window.google.translate.TranslateElement.InlineLayout.SIMPLE,
            includedLanguages: "ar,en",
          },
          "google_translate_element"
        );
      };

      const script = document.createElement("script");
      script.src =
        "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div
      style={{
        padding: "20px",
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#000",
        color: "#eee",
        minHeight: "100vh",
      }}
    >
      {/* Google Translate Widget Container */}
      <div id="google_translate_element" style={{ marginBottom: "20px" }}></div>

      {/* Intro Paragraph */}
      <p>
        Welcome to our simple translation app. Use the dropdown above to
        translate this paragraph into your preferred language.
      </p>

      {/* Digital Marketing Section */}
      <div style={{ marginTop: "30px" }}>
        <h2 style={{ color: "#00aced", marginBottom: "10px" }}>
          Introduction to Digital Marketing
        </h2>
        <p style={{ lineHeight: "1.6", color: "#ccc" }}>
          Digital marketing refers to the use of digital channels to promote or
          market products and services to consumers and businesses. It
          encompasses various online platforms such as search engines, social
          media, email, and websites. As more consumers spend time online,
          digital marketing has become an essential part of any business
          strategy.
        </p>

        <h3
          style={{ color: "#00aced", marginBottom: "8px", marginTop: "20px" }}
        >
          Key Channels in Digital Marketing
        </h3>
        <p style={{ lineHeight: "1.6", color: "#ccc" }}>
          The main channels include SEO (Search Engine Optimization), SEM
          (Search Engine Marketing), content marketing, social media marketing,
          email marketing, and affiliate marketing. Each channel has unique
          strengths: SEO drives organic traffic, SEM targets paid advertising,
          and social media fosters community engagement.
        </p>

        <h3
          style={{ color: "#00aced", marginBottom: "8px", marginTop: "20px" }}
        >
          Benefits of Digital Marketing
        </h3>
        <p style={{ lineHeight: "1.6", color: "#ccc" }}>
          Digital marketing offers measurable results through analytics, greater
          global reach, and cost-effectiveness compared to traditional
          marketing. It allows businesses to connect directly with their
          audience, customize campaigns, and react in real time to consumer
          behavior.
        </p>

        <h3
          style={{ color: "#00aced", marginBottom: "8px", marginTop: "20px" }}
        >
          Popular Digital Marketing Strategies
        </h3>
        <p style={{ lineHeight: "1.6", color: "#ccc" }}>
          Popular strategies include influencer partnerships, video marketing,
          email automation, retargeting ads, and content personalization. These
          strategies aim to build brand awareness, increase engagement, and
          drive sales through relevant and timely messaging.
        </p>

        <h3
          style={{ color: "#00aced", marginBottom: "8px", marginTop: "20px" }}
        >
          Trends Shaping the Future
        </h3>
        <p style={{ lineHeight: "1.6", color: "#ccc" }}>
          Current trends such as AI-driven marketing, voice search optimization,
          chatbots, and interactive content are transforming how brands interact
          with customers. Embracing these technologies enables marketers to
          deliver personalized experiences and stay competitive.
        </p>

        <h3
          style={{ color: "#00aced", marginBottom: "8px", marginTop: "20px" }}
        >
          Challenges in Digital Marketing
        </h3>
        <p style={{ lineHeight: "1.6", color: "#ccc" }}>
          Despite its advantages, digital marketing faces challenges including
          data privacy regulations, ad fraud, and keeping up with constantly
          evolving algorithms. Marketers must stay informed and adapt strategies
          to overcome these hurdles.
        </p>

        <h3
          style={{ color: "#00aced", marginBottom: "8px", marginTop: "20px" }}
        >
          Conclusion
        </h3>
        <p style={{ lineHeight: "1.6", color: "#ccc" }}>
          Digital marketing is a dynamic and vital tool for businesses of all
          sizes. By leveraging its channels and staying abreast of emerging
          trends, companies can build meaningful relationships with customers
          and achieve sustainable growth in the digital age.
        </p>
      </div>
    </div>
  );
}

export default App;
