import React, { useEffect, useMemo, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowRight,
  ChevronDown,
  ChevronRight,
  Search,
  SlidersHorizontal,
  Mail,
  Phone,
  Menu,
  X,
  Instagram,
  Facebook,
  Linkedin,
  ShieldCheck,
  PackageCheck,
  Globe2,
  Sprout,
  MapPin,
  ClipboardCheck,
  Factory,
  Package,
  Ship,
  Truck,
  Warehouse,
} from "lucide-react";
import "./styles.css";
import "./responsive.css";

const categories = [
  "All Categories",
  "Rice & Flours",
  "Whole Spices",
  "Natural Sweeteners",
  "Fresh Vegetables",
  "Fresh Fruits",
];
const products = [
  {
    name: "Green Cardamom",
    category: "Whole Spices",
    origin: "Kerala & Karnataka, India",
    image: "/images/products/green-cardamom.jpg",
    botanicalName: "Elettaria cardamomum",
    form: "Whole green pods",
    grades: "8 mm+, 7.5 mm, 7 mm, 6 mm",
    moq: "1 Metric Ton (MT)",
    packaging: "Customised packaging",
    appearance: "Green whole pods",
    taste: "Warm, aromatic and characteristic",
    aroma: "Distinctive sweet, aromatic fragrance",
    supplyForm: "Whole pods",
    applications: "Food processing • Spice blends • Bakery • Confectionery • Beverage preparations",
    desc: "Whole green pods in 8 mm+, 7.5 mm, 7 mm and 6 mm grades. MOQ: 1 MT. Customised packaging.",
  },
  {
    name: "Black Pepper",
    category: "Whole Spices",
    origin: "Kerala & Karnataka, India",
    image: "/images/products/black-pepper.jpg",
    botanicalName: "Piper nigrum",
    form: "Whole black peppercorns",
    grades: "500 GL, 550 GL, 600 GL",
    moq: "Negotiable",
    packaging: "Customised packaging",
    appearance: "Whole dried peppercorns",
    taste: "Pungent and peppery",
    aroma: "Warm, characteristic pepper aroma",
    supplyForm: "Whole black peppercorns",
    applications: "Seasoning • Spice blends • Food processing • Sauces • Culinary preparations",
    desc: "Whole peppercorns in 500 GL, 550 GL and 600 GL grades. Negotiable MOQ with customised packaging.",
  },
  {
    name: "Cumin",
    category: "Whole Spices",
    origin: "Gujarat & Rajasthan, India",
    image: "/images/products/cumin.jpg",
    botanicalName: "Cuminum cyminum",
    form: "Whole cumin seeds",
    grades: "Singapore Quality (99% purity) • Europe / Sortex Quality (99.5% purity)",
    moq: "Negotiable",
    packaging: "Customised packaging",
    appearance: "Small, elongated, ridged seeds",
    taste: "Warm, earthy and slightly pungent",
    aroma: "Distinctive warm aroma",
    supplyForm: "Whole cumin seeds",
    applications: "Seasoning • Spice blends • Curry powders • Food processing",
    desc: "Whole seeds available in Singapore Quality (99%) and Europe / Sortex Quality (99.5%).",
  },
  {
    name: "Coriander Seeds",
    category: "Whole Spices",
    origin: "Gujarat, Rajasthan & Madhya Pradesh, India",
    image: "/images/products/coriander.jpg",
    botanicalName: "Coriandrum sativum",
    form: "Whole coriander seeds",
    grades: "Eagle • Badami • Scooter • Parrot",
    moq: "Negotiable",
    packaging: "Customised packaging",
    appearance: "Small, round, ridged seeds",
    taste: "Mild, warm and citrus-like",
    aroma: "Fresh, characteristic coriander aroma",
    supplyForm: "Whole seeds",
    applications: "Spice blends • Curry powders • Seasoning • Food processing • Pickles",
    desc: "Whole coriander seeds in Eagle, Badami, Scooter and Parrot grades with customised packaging.",
  },
  {
    name: "Fennel Seeds",
    category: "Whole Spices",
    origin: "Gujarat & Rajasthan, India",
    image: "/images/products/fennel.jpg",
    imageCredit: {
      artist: "Biswarup Ganguly",
      license: "CC BY 3.0",
      sourceUrl:
        "https://commons.wikimedia.org/wiki/File:Fennel_Seeds_-_Kolkata_2011-11-15_7057.JPG",
      licenseUrl: "https://creativecommons.org/licenses/by/3.0/",
    },
    botanicalName: "Foeniculum vulgare",
    form: "Whole fennel seeds",
    grades: "Singapore • Europe",
    moq: "Negotiable",
    packaging: "Customised packaging",
    appearance: "Elongated, ridged greenish seeds",
    taste: "Sweet, mild and aromatic",
    aroma: "Distinctive sweet, anise-like aroma",
    supplyForm: "Whole fennel seeds",
    applications: "Seasoning • Spice blends • Bakery products • Confectionery • Food processing",
    desc: "Whole fennel seeds sourced from Gujarat and Rajasthan, available in Singapore and Europe grades with customised packaging.",
  },
  {
    name: "Cloves",
    category: "Whole Spices",
    origin: "Tamil Nadu & Kerala, India",
    image: "/images/products/cloves.jpg",
    imageCredit: {
      artist: "Sanjay Acharya",
      license: "CC BY-SA 4.0",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Clove_close_up.jpg",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/",
    },
    botanicalName: "Syzygium aromaticum",
    form: "Whole cloves",
    grades: "CG1 • CG2 • CG3",
    moq: "Negotiable",
    packaging: "Customised packaging",
    appearance: "Small, unopened dried flower buds",
    taste: "Strong, warm and pungent",
    aroma: "Intense, rich and aromatic",
    supplyForm: "Whole dried cloves",
    applications: "Whole spice blends • Seasoning • Pickles • Bakery • Food processing",
    desc: "Whole dried cloves available in CG1, CG2 and CG3 grades. Negotiable MOQ.",
  },
  {
    name: "Mustard Seeds",
    category: "Whole Spices",
    origin: "Rajasthan & Madhya Pradesh, India",
    image: "/images/products/mustard.jpg",
    botanicalLabel: "Botanical name",
    botanicalName: "Brassica",
    form: "Whole mustard seeds",
    grades: "Canadian Grain Commission (CGC) grade specifications",
    moq: "Negotiable",
    packaging: "Customised packaging",
    appearance: "Small, round mustard seeds",
    taste: "Pungent and characteristic",
    aroma: "Distinctive mustard aroma",
    supplyForm: "Whole mustard seeds",
    applications: "Mustard condiments • Spice blends • Pickling • Seasoning • Food processing",
    desc: "Whole mustard seeds graded to Canadian Grain Commission (CGC) specifications.",
  },
  {
    name: "Turmeric Fingers",
    category: "Whole Spices",
    origin: "Salem, Nizamabad & Erode, India",
    image: "/images/products/turmeric.jpg",
    botanicalName: "Curcuma longa",
    form: "Whole dried turmeric fingers",
    gradeLabel: "Available type",
    grades: "Finger turmeric",
    additionalSpecs: [{ label: "Curcumin content", value: "2.5%-3.5% available" }],
    moq: "Negotiable",
    packaging: "Customised packaging",
    appearance: "Golden-yellow to deep yellow dried fingers",
    taste: "Warm, earthy and characteristic",
    aroma: "Distinctive earthy turmeric aroma",
    supplyForm: "Whole dried fingers",
    applications: "Spice processing • Curry powders • Seasoning blends • Food manufacturing",
    desc: "Whole dried turmeric fingers with 2.5%-3.5% curcumin content and customised packaging.",
  },
  {
    name: "Red Chilli",
    category: "Whole Spices",
    origin: "Guntur, Andhra Pradesh, India",
    image: "/images/products/red-chilli.jpg",
    imageCredit: {
      artist: "Sabina Bajracharya",
      license: "CC BY-SA 4.0",
      sourceUrl:
        "https://commons.wikimedia.org/wiki/File:Dried_Capsicum_annuum-Red_Chilli_Pepper_on_Nanglo.jpg",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/",
    },
    botanicalName: "Capsicum annuum",
    form: "Whole dried red chilli",
    gradeLabel: "Available varieties",
    grades: "Teja • Byadgi • Sannam • 334",
    additionalSpecs: [
      {
        label: "Stem options",
        value: "With stem and without stem grades available",
      },
    ],
    moq: "Negotiable",
    packaging: "Customised packaging",
    appearance: "Whole, dried red chilli pods",
    taste: "Characteristic chilli heat",
    aroma: "Distinctive dried chilli aroma",
    supplyForm: "Whole; with or without stem",
    applications: "Chilli powder • Spice blends • Seasoning • Sauces • Food processing",
    desc: "Teja, Byadgi, Sannam and 334 varieties, supplied with or without stems.",
  },
  {
    name: "Dry Ginger",
    category: "Whole Spices",
    origin: "Madhya Pradesh & Karnataka, India",
    image: "/images/products/dry-ginger.jpg",
    botanicalName: "Zingiber officinale",
    form: "Whole dried ginger",
    grades: "Grade A • Grade B • Grade C",
    moq: "Negotiable",
    packaging: "Customised packaging",
    appearance: "Dried ginger rhizomes with a firm, fibrous texture",
    taste: "Warm, pungent and characteristic",
    aroma: "Distinctive spicy ginger aroma",
    supplyForm: "Whole dried ginger",
    applications: "Spice blends • Ginger powder production • Seasoning • Food processing • Beverage preparations",
    desc: "Whole dried ginger in Grade A, Grade B and Grade C with customised packaging.",
  },
  {
    name: "Sugarcane Jaggery",
    category: "Natural Sweeteners",
    origin: "Karnataka, India",
    image: "/images/products/sugarcane-jaggery.jpg",
    form: "Sugarcane jaggery in cube form",
    grades: "Jaggery cubes with no added sugar",
    moq: "Negotiable",
    packaging: "Customised",
    appearance: "Traditional sugarcane jaggery cubes",
    taste: "Natural, rich and characteristic sweetness",
    aroma: "Characteristic sugarcane jaggery aroma",
    supplyForm: "Jaggery cubes",
    applications: "Traditional sweet preparations • Beverages • General culinary use",
    desc: "Traditional sugarcane jaggery supplied in cube form, with no added sugar. Customised packaging and supply details are confirmed per order.",
  },
  {
    name: "Jaggery Powder",
    category: "Natural Sweeteners",
    origin: "Karnataka, India",
    image: "/images/products/jaggery-powder.jpg",
    gradeLabel: "Grade",
    form: "Powdered sugarcane jaggery",
    grades: "Chemical-Free & Unbleached (Sulphur-Free)",
    moq: "Negotiable",
    packaging: "Customised",
    appearance: "Fine powdered sugarcane jaggery",
    taste: "Natural, characteristic jaggery sweetness",
    aroma: "Warm, characteristic sugarcane aroma",
    supplyForm: "Powdered sugarcane jaggery",
    applications: "Traditional sweet preparations • Beverages • General culinary use",
    desc: "Powdered sugarcane jaggery offered in a chemical-free, unbleached and sulphur-free grade. Customised packaging and final specifications are confirmed per order.",
  },
  {
    name: "Sugar",
    category: "Natural Sweeteners",
    origin: "Karnataka, India",
    image: "/images/products/sugar.jpg",
    form: "White sugar and refined sugar",
    grades: "White Sugar • Refined Sugar",
    moq: "Negotiable",
    packaging: "Customised",
    appearance: "Clean white crystalline sugar",
    taste: "Sweet and clean",
    aroma: "Neutral characteristic sugar aroma",
    supplyForm: "White sugar and refined sugar",
    applications: "Beverages • Sweets and confectionery • Bakery products • Food processing • General culinary use",
    desc: "White sugar and refined sugar sourced from Karnataka, India. Suitable for sweetening and general food and beverage preparations.",
  },
  {
    name: "Elaichi Banana (Baby Banana)",
    category: "Fresh Fruits",
    origin: "Karnataka, India",
    botanicalName: "Musa acuminata",
    image: "/images/products/elaichi-banana.jpg",
    form: "Fresh whole Elaichi banana",
    gradeLabel: "Available grades",
    grades: "Premium Export Quality",
    moq: "Negotiable",
    packaging: "Customised packaging",
    appearance: "Small, compact fruits with a smooth peel",
    taste: "Naturally sweet and characteristic",
    aroma: "Characteristic sweet banana aroma",
    supplyForm: "Fresh whole bananas",
    applications: "Fresh consumption • Fruit retail • Fruit platters • Desserts • Food service",
    desc: "Fresh Elaichi bananas, commonly known as baby bananas, sourced from Karnataka, India.",
  },
  {
    name: "Semi Husked Coconut",
    category: "Fresh Fruits",
    origin: "Karnataka & Tamil Nadu, India",
    botanicalName: "Cocos nucifera",
    image: "/images/products/semi-husked-coconut.jpg",
    form: "Semi husked whole coconut",
    gradeLabel: "Available grades",
    grades: "Premium Export Quality",
    moq: "Negotiable",
    packaging: "Customised packaging",
    appearance: "Mature coconut with outer husk partially removed",
    taste: "Mature coconut kernel with characteristic flavour",
    aroma: "Mild, characteristic coconut aroma",
    supplyForm: "Semi husked whole coconuts",
    applications: "Food processing • Culinary use • Coconut products • Food service",
    desc: "Semi husked coconuts sourced from Karnataka and Tamil Nadu, India.",
  },
  {
    name: "Robusta Banana",
    category: "Fresh Fruits",
    origin: "Karnataka, India",
    botanicalName: "Musa acuminata",
    image: "/images/products/robusta-banana.jpg",
    form: "Fresh whole Robusta banana",
    gradeLabel: "Available grades",
    grades: "Premium Quality",
    moq: "Negotiable",
    packaging: "Customised packaging",
    appearance: "Firm, elongated fruits with a smooth peel",
    taste: "Mildly sweet and characteristic",
    aroma: "Characteristic ripe banana aroma",
    supplyForm: "Fresh whole bananas",
    applications: "Fresh consumption • Fruit retail • Food service • Processing",
    desc: "Fresh Robusta bananas sourced from Karnataka, India.",
  },
  {
    name: "Tender Coconut",
    category: "Fresh Fruits",
    origin: "Karnataka & Tamil Nadu, India",
    botanicalName: "Cocos nucifera",
    image: "/images/products/tender-coconut.jpg",
    form: "Fresh tender coconut",
    gradeLabel: "Available grades",
    grades: "Premium Hand Picked",
    moq: "Negotiable",
    packaging: "Customised packaging",
    appearance: "Fresh green tender coconut",
    taste: "Naturally refreshing coconut water with tender kernel",
    aroma: "Fresh, mild coconut aroma",
    supplyForm: "Whole tender coconuts",
    applications: "Fresh coconut water • Beverage service • Retail • Hospitality",
    desc: "Tender coconuts sourced from Karnataka and Tamil Nadu, India.",
  },
  {
    name: "Jeera Rice",
    category: "Rice & Flours",
    origin: "Tamil Nadu, West Bengal & Karnataka, India",
    image: "/images/products/jeera-rice.jpg",
    form: "Fine, short-grain aromatic rice",
    gradeLabel: "Varieties",
    grades: "Seeraga Samba • Jeerakasala",
    moq: "Negotiable",
    packaging: "Customised",
    appearance: "Fine, short-grain rice with a characteristic appearance",
    taste: "Natural and suitable for traditional rice preparations",
    aroma: "Distinctive natural aroma",
    supplyForm: "Jeera rice varieties",
    applications: "Traditional South Indian rice dishes • Regional cuisine • Everyday meals • Specialty rice preparations",
    desc: "Aromatic short-grain rice varieties including Seeraga Samba and Jeerakasala, sourced from selected growing regions in India.",
  },
  {
    name: "Idly Rice",
    category: "Rice & Flours",
    origin: "Tamil Nadu & Andhra Pradesh, India",
    image: "/images/products/idly-rice.jpg",
    form: "Idly rice",
    gradeLabel: "Available grades",
    grades: "CR 1009 (Ponmani / Savithri) • ADT 37 • ADT 36",
    moq: "Negotiable",
    packaging: "Customised packaging",
    appearance: "Rice grains selected for idly preparation",
    taste: "Mild, characteristic rice flavour",
    aroma: "Mild, characteristic rice aroma",
    supplyForm: "Idly rice varieties",
    applications: "Idly • South Indian breakfast preparations • Food service • Catering",
    desc: "Idly rice sourced from Tamil Nadu and Andhra Pradesh, including CR 1009, ADT 37 and ADT 36 varieties.",
  },
  {
    name: "Basmati Rice",
    category: "Rice & Flours",
    origin: "Andhra Pradesh & Karnataka, India",
    image: "/images/products/basmati-rice.jpg",
    form: "Raw and milled Basmati rice",
    gradeLabel: "Available grades",
    grades: "Pusa Basmati 1121 • Pusa Basmati 1509 • Pusa Basmati 1847",
    moq: "Negotiable",
    packaging: "Customised packaging",
    appearance: "Long, slender grains characteristic of Basmati rice",
    taste: "Characteristic Basmati flavour",
    aroma: "Distinctive aromatic fragrance",
    supplyForm: "Raw and milled Basmati rice",
    applications: "Biryani • Pulao • Specialty rice dishes • Catering • Food service",
    desc: "Pusa Basmati rice sourced from Andhra Pradesh and Karnataka, including 1121, 1509 and 1847 grades.",
  },
  {
    name: "Sona Masoori Rice",
    category: "Rice & Flours",
    origin: "Andhra Pradesh & Karnataka, India",
    image: "/images/products/sona-masoori-rice.jpg",
    form: "Sona Masoori rice",
    gradeLabel: "Available grades",
    grades: "Sona Masoori Raw • Sona Masoori Steam / Parboiled",
    moq: "Negotiable",
    packaging: "Customised packaging",
    appearance: "Medium-grain rice with a slender, characteristic shape",
    taste: "Mild, characteristic rice flavour",
    aroma: "Mild, characteristic rice aroma",
    supplyForm: "Raw and steam / parboiled rice",
    applications: "Daily cooking • Rice dishes • Catering • Food service • Food processing",
    desc: "Sona Masoori rice available in raw and steam / parboiled forms.",
  },
  {
    name: "IR64 Rice",
    category: "Rice & Flours",
    origin: "Andhra Pradesh & Karnataka, India",
    image: "/images/products/ir64-rice.jpg",
    form: "IR64 rice",
    gradeLabel: "Available grades",
    grades: "IR64 Raw • IR64 Parboiled",
    moq: "Negotiable",
    packaging: "Customised packaging",
    appearance: "Long, slender rice grains",
    taste: "Mild, characteristic rice flavour",
    aroma: "Mild, characteristic rice aroma",
    supplyForm: "Raw and parboiled rice",
    applications: "Daily cooking • Rice dishes • Catering • Food service • Food processing",
    desc: "IR64 rice sourced from Andhra Pradesh and Karnataka in raw and parboiled forms.",
  },
  {
    name: "Rava / Sooji",
    category: "Rice & Flours",
    origin: "Uttar Pradesh & Madhya Pradesh, India",
    image: "/images/products/rava-sooji.jpg",
    form: "Milled wheat semolina",
    gradeLabel: "Available grades",
    grades: "Bombay Rava / Sooji (Medium or Fine) • Chiroti Rava • Bansi Rava",
    moq: "Negotiable",
    packaging: "Customised",
    appearance: "Milled wheat semolina in multiple textures",
    taste: "Characteristic, mild wheat flavour",
    aroma: "Mild, characteristic wheat aroma",
    supplyForm: "Milled wheat semolina",
    applications: "Upma and other breakfast dishes • Traditional Indian sweets • Bakery and confectionery preparations • Specialty cooking",
    desc: "Rava / sooji available in Bombay, Chiroti and Bansi grades for traditional and contemporary food preparations.",
  },
  {
    name: "Chakki Atta (Whole Wheat Flour)",
    category: "Rice & Flours",
    origin: "Uttar Pradesh & Madhya Pradesh, India",
    botanicalName: "Triticum aestivum",
    image: "/images/products/chakki-atta.jpg",
    form: "Whole wheat flour (chakki atta)",
    gradeLabel: "Available grades",
    grades: "Premium Grade",
    moq: "Negotiable",
    packaging: "Moisture-resistant packing",
    appearance: "Finely milled whole wheat flour with a natural wheat tone",
    taste: "Characteristic, mild whole-wheat flavour",
    aroma: "Mild, characteristic wheat aroma",
    supplyForm: "Whole wheat flour (chakki-ground atta)",
    applications: "Chapati • Roti • Paratha • Puri • Bakery products • Food preparation",
    desc: "Chakki atta sourced from Uttar Pradesh and Madhya Pradesh in premium grade.",
  },
  {
    name: "Maida (Refined Wheat Flour)",
    category: "Rice & Flours",
    origin: "Uttar Pradesh & Madhya Pradesh, India",
    image: "/images/products/maida.jpg",
    form: "Refined wheat flour (maida)",
    gradeLabel: "Available grades",
    grades: "High-Protein / Premium Bakery Grade • Standard Bakery & Confectionery Grade • Retail / Household Grade",
    moq: "Negotiable",
    packaging: "Moisture-resistant packing",
    appearance: "Fine, white refined wheat flour with a smooth texture",
    taste: "Mild, neutral wheat flavour",
    aroma: "Mild, characteristic wheat aroma",
    supplyForm: "Finely milled refined wheat flour",
    applications: "Bakery products • Bread • Biscuits • Confectionery • Snacks • Food processing",
    desc: "Refined wheat flour (maida) sourced from Uttar Pradesh and Madhya Pradesh for bakery and confectionery applications.",
  },
];
function ProductImageCredit({ credit }) {
  if (!credit) return null;

  return (
    <small className="product-image-credit">
      Photo:{" "}
      <a href={credit.sourceUrl} target="_blank" rel="noreferrer">
        {credit.artist}
      </a>{" "}
      ·{" "}
      <a href={credit.licenseUrl} target="_blank" rel="noreferrer">
        {credit.license}
      </a>
    </small>
  );
}

const productSlug = (product) =>
  product.name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
const productFromPath = () => {
  const match = window.location.pathname.match(/^\/products\/([^/]+)\/?$/);
  return match
    ? products.find((product) => productSlug(product) === match[1]) || null
    : null;
};
const productFromContactQuery = () => {
  const slug = new URLSearchParams(window.location.search).get("product");
  return products.find((product) => productSlug(product) === slug) || null;
};

const heroImages = [
  "/images/products/green-cardamom.jpg",
  "/images/products/black-pepper.jpg",
  "/images/products/cumin.jpg",
  "/images/products/coriander.jpg",
  "/images/products/fennel.jpg",
  "/images/products/cloves.jpg",
  "/images/products/mustard.jpg",
  "/images/products/turmeric.jpg",
  "/images/products/red-chilli.jpg",
  "/images/products/dry-ginger.jpg",
];

function ContactPage({ preselectedProduct }) {
  const [selectedProducts, setSelectedProducts] = useState(() =>
    preselectedProduct ? [preselectedProduct.name] : [],
  );
  const [selectionError, setSelectionError] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  function submitInquiry(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const interests = formData.getAll("products");
    if (!interests.length) {
      setSelectionError(true);
      return;
    }

    const details = [
      `Name: ${formData.get("name")}`,
      `Business email: ${formData.get("email")}`,
      `Phone / WhatsApp: ${formData.get("phone")}`,
      `Subject: ${formData.get("subject")}`,
      `Products: ${interests.join(", ")}`,
      `Bulk specifications: ${formData.get("specifications")}`,
    ].join("\n");
    const subject = encodeURIComponent(
      `Export sourcing enquiry - ${formData.get("subject")}`,
    );
    window.location.href = `mailto:suraj@veltarainternational.com?subject=${subject}&body=${encodeURIComponent(details)}`;
    setSubmitted(true);
  }

  return (
    <div className="contact-page">
      <section className="contact-hero">
        <span className="eyebrow">Export &amp; Sourcing Desk</span>
        <h1>Connect With Our Sourcing Team</h1>
        <p>
          Looking to source Indian whole spices in bulk? Share your products,
          volume, destination and packaging requirements for a tailored quote.
          Specifications and availability are confirmed for each order.
        </p>
      </section>

      <div className="contact-layout">
        <aside className="contact-sidebar">
          <section className="contact-organization">
            <span className="contact-kicker">Organization Details</span>
            <h2>Veltara International</h2>
            <div className="contact-detail">
              <strong>Office Address</strong>
              <p>
                43, 8th Cross, C Block, 1st Stage, JP Nagara, Mysuru – 570008,
                Karnataka, India
              </p>
            </div>
            <div className="contact-detail">
              <strong>Phone / WhatsApp</strong>
              <a href="tel:+917892786875">+91 7892786875</a>
            </div>
            <div className="contact-detail">
              <strong>Business Email</strong>
              <a href="mailto:suraj@veltarainternational.com">
                suraj@veltarainternational.com
              </a>
            </div>
            <div className="contact-identifiers">
              GSTIN: 29HNUPM0596R1ZH
              <br />
              IEC: HNUPM0596R · PAN: HNUPM0596R
            </div>
          </section>
          <a
            className="contact-whatsapp"
            href={`https://wa.me/917892786875?text=${encodeURIComponent(`Hello Veltara International, I am interested in ${preselectedProduct?.name || "your whole spice range"} and would like an export quote.`)}`}
            target="_blank"
            rel="noreferrer"
          >
            <span>
              <strong>Fast-track enquiry</strong>
              <small>Contact us directly on WhatsApp</small>
            </span>
            <ArrowRight size={18} />
          </a>
        </aside>

        <section className="contact-form-card" id="contact-form">
          <span className="contact-kicker">Outbound Sourcing Form</span>
          <h2>Bulk Export Trade Sourcing Enquiry</h2>
          <p>
            Required fields are marked with an asterisk (*). Tell us what you
            need and we’ll prepare a tailored response.
          </p>
          {submitted ? (
            <div className="contact-success" role="status">
              <h3>Enquiry prepared</h3>
              <p>
                Your email application should open with the enquiry details. If
                it didn’t, email{" "}
                <a href="mailto:suraj@veltarainternational.com">
                  suraj@veltarainternational.com
                </a>
                .
              </p>
            </div>
          ) : (
            <form onSubmit={submitInquiry}>
              <fieldset className="contact-interest">
                <legend>1. Commodities of Interest (Select all that apply)</legend>
                <div className="contact-product-options">
                  {products.map((product) => (
                    <label
                      key={product.name}
                      className={
                        selectedProducts.includes(product.name) ? "selected" : ""
                      }
                    >
                      <input
                        type="checkbox"
                        name="products"
                        value={product.name}
                        checked={selectedProducts.includes(product.name)}
                        onChange={(event) => {
                          setSelectionError(false);
                          setSelectedProducts((current) =>
                            event.target.checked
                              ? [...current, product.name]
                              : current.filter((name) => name !== product.name),
                          );
                        }}
                      />
                      <span>{product.name}</span>
                    </label>
                  ))}
                </div>
                {selectionError && (
                  <small className="contact-error">
                    Select at least one product to continue.
                  </small>
                )}
              </fieldset>

              <fieldset className="contact-sourcing">
                <legend>2. Sourcing Parameters &amp; Contact Details</legend>
                <div className="contact-fields">
                  <label>
                    Your Full Name *
                    <input
                      name="name"
                      autoComplete="name"
                      required
                      placeholder="Your full name"
                    />
                  </label>
                  <label>
                    Business Email *
                    <input
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      placeholder="you@company.com"
                    />
                  </label>
                  <label>
                    Mobile / WhatsApp (with country code) *
                    <input
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      required
                      placeholder="+1 555 000 0000"
                    />
                  </label>
                  <label>
                    Trade Subject *
                    <input
                      name="subject"
                      required
                      defaultValue={
                        preselectedProduct
                          ? `Bulk ${preselectedProduct.name} enquiry`
                          : ""
                      }
                      placeholder="e.g., Whole spice bulk order enquiry"
                    />
                  </label>
                  <label className="contact-specifications">
                    Bulk Specifications (Quantity, Packaging, Destination) *
                    <textarea
                      name="specifications"
                      required
                      rows="4"
                      placeholder="Estimated volume, packing request, destination country or port..."
                    />
                  </label>
                </div>
              </fieldset>
              <button className="primary-btn contact-submit" type="submit">
                Send Sourcing Enquiry <ArrowRight size={17} />
              </button>
            </form>
          )}
        </section>
      </div>

      <section className="contact-coordination">
        <div className="contact-coordination-copy">
          <span className="contact-kicker">Order Coordination</span>
          <h2>Support For Your Export Enquiry</h2>
          <p>
            We coordinate product sourcing, buyer-led specifications and
            customised packing discussions. Final specifications and supply
            availability are confirmed order by order.
          </p>
          <div className="contact-office-address">
            <strong>Veltara International</strong>
            <span>
              43, 8th Cross, C Block, 1st Stage, JP Nagara, Mysuru – 570008,
              Karnataka, India
            </span>
          </div>
        </div>
        <div className="contact-map-card">
          <span className="contact-map-compass" aria-hidden="true">
            <Globe2 size={29} />
          </span>
          <div className="contact-map-location" aria-hidden="true">
            <span><MapPin size={22} /></span>
          </div>
          <div className="contact-map-content">
            <h3>Veltara International</h3>
            <strong>Mysuru Office Desk · Karnataka, India</strong>
            <p>
              43, 8th Cross, C Block, 1st Stage, JP Nagara, Mysuru – 570008
            </p>
          </div>
          <a
            href="https://www.google.com/maps/search/?api=1&query=43%2C%208th%20Cross%2C%20C%20Block%2C%201st%20Stage%2C%20JP%20Nagara%2C%20Mysuru%20570008%2C%20Karnataka%2C%20India"
            target="_blank"
            rel="noreferrer"
          >
            Open in Google Maps <ArrowRight size={15} />
          </a>
        </div>
      </section>
    </div>
  );
}

function ExportPage({ onRequestQuote }) {
  const capabilities = [
    {
      title: "Product & Origin Sourcing",
      description:
        "Source whole spices from the Indian origins listed for each product, with grades selected to buyer requirements.",
      icon: <Sprout />,
    },
    {
      title: "Buyer-led Specifications",
      description:
        "Confirm product form, grade and order specifications before supply is finalised.",
      icon: <ShieldCheck />,
    },
    {
      title: "Customised Packaging",
      description:
        "Discuss packaging options for bulk orders and confirm the final packing configuration per order.",
      icon: <PackageCheck />,
    },
    {
      title: "Export Coordination",
      description:
        "Coordinate destination, shipment and order requirements as part of the export enquiry.",
      icon: <Globe2 />,
    },
  ];

  const planningDetails = [
    {
      title: "Destination & port",
      description:
        "Share your destination country and preferred port so route options can be discussed.",
    },
    {
      title: "Quantity & shipment",
      description:
        "Include the order volume and any shipment or delivery requirements in your enquiry.",
    },
    {
      title: "Product & packaging",
      description:
        "Choose the product and grade, then confirm customised packing requirements.",
    },
  ];

  return (
    <div className="export-page">
      <section className="export-hero">
        <div className="export-hero-content">
          <span className="eyebrow">Veltara International · Exports &amp; Imports</span>
          <h1>Exporting Indian Spices to Global Buyers</h1>
          <p>
            We connect international buyers with Indian whole-spice sourcing.
            Discuss product origin, grades, packaging and destination with our
            team; final specifications and availability are confirmed for each
            order.
          </p>
          <button
            className="primary-btn export-hero-cta"
            onClick={() => onRequestQuote()}
          >
            Request an Export Quote <ArrowRight size={17} />
          </button>
        </div>
        <div className="export-hero-stats">
          <div><strong>10</strong><span>Whole spice products</span></div>
          <div><strong>India</strong><span>Sourcing origin</span></div>
          <div><strong>Custom</strong><span>Packaging discussions</span></div>
          <div><strong>Order-wise</strong><span>Specification confirmation</span></div>
        </div>
      </section>

      <section className="export-section">
        <div className="export-section-heading">
          <span className="contact-kicker">Integrated Export Support</span>
          <h2>Export Sourcing Capabilities</h2>
          <p>
            Sourcing and supply details are discussed with each buyer and
            confirmed against the requirements of the order.
          </p>
        </div>
        <div className="export-capability-grid">
          {capabilities.map((capability) => (
            <article key={capability.title} className="export-capability-card">
              <span className="export-capability-icon">{capability.icon}</span>
              <h3>{capability.title}</h3>
              <p>{capability.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="export-planning">
        <div className="export-section-heading">
          <span className="contact-kicker">Order Planning</span>
          <h2>Plan Your Export Enquiry</h2>
          <p>
            Share these details so we can respond to your sourcing and shipping
            requirements.
          </p>
        </div>
        <div className="export-planning-grid">
          {planningDetails.map((detail, index) => (
            <article key={detail.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{detail.title}</h3>
              <p>{detail.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="export-section export-products">
        <div className="export-section-heading">
          <span className="contact-kicker">Whole Spice Range</span>
          <h2>Products Available for Export Enquiries</h2>
          <p>
            Explore product origins and available grades. Availability and
            specifications are subject to order-wise confirmation.
          </p>
        </div>
        <div className="export-products-grid">
          {products.map((product) => (
            <article className="export-product-card" key={product.name}>
              <div className="export-product-visual">
                <img
                  src={product.image}
                  alt={product.name}
                  loading="lazy"
                  decoding="async"
                />
                <ProductImageCredit credit={product.imageCredit} />
              </div>
              <div>
                <span>{product.category}</span>
                <h3>{product.name}</h3>
                <p>{product.desc}</p>
                <a href={`/products/${productSlug(product)}`}>
                  View Product Details <ArrowRight size={14} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="export-documents">
        <div>
          <span className="contact-kicker">Before Shipment</span>
          <h2>Documentation &amp; Order Confirmation</h2>
          <p>
            Product specifications, packing details and documentation needs
            depend on the product, destination and order. Confirm applicable
            documents with our team before shipment.
          </p>
        </div>
        <ul>
          <li>Confirm product, grade and final specifications</li>
          <li>Confirm packaging and order quantity</li>
          <li>Discuss destination-specific documentation requirements</li>
          <li>Confirm supply and shipment details order by order</li>
        </ul>
      </section>

      <section className="export-quote-cta">
        <span className="eyebrow">Partner With Veltara International</span>
        <h2>Request an Export Quote</h2>
        <p>
          Tell us the product, grade, quantity, packaging and destination you
          have in mind.
        </p>
        <button className="primary-btn" onClick={() => onRequestQuote()}>
          Get an Export Quote <ArrowRight size={17} />
        </button>
      </section>
    </div>
  );
}

function ProductDetailPage({ product, onBack, onRequestQuote, onOpenProduct }) {
  return (
    <section className="product-detail-page">
      <div className="product-detail-page-inner">
        <button className="detail-back" onClick={onBack}>
          ← Back to Product Catalog
        </button>
        <div className="detail-layout">
          <div className="detail-visual">
            <div className="detail-image">
              <img src={product.image} alt={product.name} />
              <ProductImageCredit credit={product.imageCredit} />
              <span>{product.category}</span>
            </div>
            <div className="detail-assurances">
              <span><ShieldCheck size={16} /> Buyer-led specifications</span>
              <span><PackageCheck size={16} /> Hygienically packed</span>
            </div>
          </div>
          <div className="detail-content">
            <span className="eyebrow">Premium Commodity</span>
            <h2 id="product-detail-title">{product.name}</h2>
            {product.botanicalName && (
              <p className="botanical-name">
                {product.botanicalLabel || "Botanical name"}:{" "}
                <em>{product.botanicalName}</em>
              </p>
            )}
            <p className="detail-description">{product.desc}</p>

            <h3 className="detail-section-title">
              <SlidersHorizontal size={16} /> Technical Specifications
            </h3>
            <dl className="detail-grid">
              <div><dt>Product form</dt><dd>{product.form}</dd></div>
              <div><dt>Origin</dt><dd>{product.origin}</dd></div>
              <div>
                <dt>{product.gradeLabel || "Available grades"}</dt>
                <dd>{product.grades}</dd>
              </div>
              {product.additionalSpecs?.map((spec) => (
                <div key={spec.label}><dt>{spec.label}</dt><dd>{spec.value}</dd></div>
              ))}
              <div><dt>Minimum order quantity</dt><dd>{product.moq}</dd></div>
              <div><dt>Appearance</dt><dd>{product.appearance}</dd></div>
              <div><dt>Taste</dt><dd>{product.taste}</dd></div>
              <div><dt>Aroma</dt><dd>{product.aroma}</dd></div>
              <div><dt>Supply form</dt><dd>{product.supplyForm || product.form}</dd></div>
            </dl>

            <div className="detail-extra-cards">
              <section>
                <h3>Packing Alternatives</h3>
                <ul>
                  <li>{product.packaging} available</li>
                  <li>Final packing configuration confirmed per order</li>
                </ul>
              </section>
              <section>
                <h3>Industry Applications</h3>
                <p>{product.applications}</p>
              </section>
            </div>
            <div className="detail-availability">
              <span>Export enquiries welcome</span>
              <span>Supply and specifications confirmed per order</span>
            </div>
            <div className="detail-actions">
              <a
                className="whatsapp-btn"
                href={`https://wa.me/917892786875?text=${encodeURIComponent(`Hello Veltara International, I am interested in ${product.name}. Please share pricing, grades and packaging details.`)}`}
                target="_blank"
                rel="noreferrer"
              >
                <Phone size={16} /> WhatsApp Inquiry
              </a>
              <button className="primary-btn detail-enquiry" onClick={() => onRequestQuote(product)}>
                Request Quotation <ArrowRight size={17} />
              </button>
            </div>
            <p className="detail-order-note">
              Specifications and supply are subject to final confirmation for each order.
            </p>
          </div>
        </div>

        <section className="detail-related" aria-labelledby="related-products-title">
          <h2 id="related-products-title">Related Premium Crops</h2>
          <div className="detail-related-grid">
            {products
              .filter((item) => item.name !== product.name)
              .slice(0, 4)
              .map((item) => (
                <article className="detail-related-card" key={item.name}>
                  <div className="detail-related-visual">
                    <img src={item.image} alt={item.name} loading="lazy" decoding="async" />
                    <ProductImageCredit credit={item.imageCredit} />
                  </div>
                  <div className="detail-related-info">
                    <span>{item.category}</span>
                    <h3>{item.name}</h3>
                    <p>{item.desc}</p>
                    <div>
                      <small>MOQ: {item.moq}</small>
                      <a
                        href={`/products/${productSlug(item)}`}
                        onClick={(event) => {
                          if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
                          event.preventDefault();
                          onOpenProduct(item);
                        }}
                      >
                        View Details →
                      </a>
                    </div>
                  </div>
                </article>
              ))}
          </div>
        </section>
      </div>
    </section>
  );
}

function App() {
  const [category, setCategory] = useState("All Categories");
  const [mode, setMode] = useState("Export");
  const [query, setQuery] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const [productsMenuOpen, setProductsMenuOpen] = useState(
    () => window.innerWidth <= 850,
  );
  const [heroIndex, setHeroIndex] = useState(0);
  const [selectedProduct, setSelectedProduct] = useState(productFromPath);
  const [contactPage, setContactPage] = useState(
    () => window.location.pathname === "/contact",
  );
  const [exportPage, setExportPage] = useState(
    () => window.location.pathname === "/export",
  );
  const [contactProduct, setContactProduct] = useState(productFromContactQuery);

  function openProductDetails(product) {
    window.history.pushState(
      { product: productSlug(product) },
      "",
      `/products/${productSlug(product)}`,
    );
    setSelectedProduct(product);
    setContactPage(false);
    setExportPage(false);
    setProductsMenuOpen(false);
    window.scrollTo({ top: 0 });
  }

  function openContact(product) {
    const url = product
      ? `/contact?product=${productSlug(product)}`
      : "/contact";
    window.history.pushState({ contact: true }, "", url);
    setSelectedProduct(null);
    setContactPage(true);
    setExportPage(false);
    setContactProduct(product || null);
    setMenuOpen(false);
    setProductsMenuOpen(false);
    window.scrollTo({ top: 0 });
  }

  function closeProductDetails() {
    window.history.replaceState({}, "", "/#products");
    setSelectedProduct(null);
    setContactPage(false);
    setExportPage(false);
    setContactProduct(null);
    window.requestAnimationFrame(() => {
      document.getElementById("products")?.scrollIntoView({ behavior: "smooth" });
    });
  }

  useEffect(() => {
    const handlePopState = () => {
      setSelectedProduct(productFromPath());
      setContactPage(window.location.pathname === "/contact");
      setExportPage(window.location.pathname === "/export");
      setContactProduct(productFromContactQuery());
    };
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setHeroIndex((current) => (current + 1) % heroImages.length);
    }, 5000);

    return () => window.clearInterval(interval);
  }, []);

  useEffect(() => {
    if (!menuOpen) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [menuOpen]);

  useEffect(() => {
    document.title = contactPage
      ? "Contact & Export Enquiries | Veltara International"
      : exportPage
        ? "Indian Spice Exports | Veltara International"
        : selectedProduct
        ? `${selectedProduct.name} | Veltara International`
        : "Veltara International | Indian Agricultural Exporter";
  }, [contactPage, exportPage, selectedProduct]);

  useEffect(() => {
    if (selectedProduct) window.scrollTo({ top: 0 });
  }, [selectedProduct]);

  useEffect(() => {
    const sections = document.querySelectorAll(
      ".catalog-controls, .catalog, .sourcing-flow, .footer-main",
    );
    sections.forEach((section) => section.classList.add("reveal-section"));

    if (!("IntersectionObserver" in window)) {
      sections.forEach((section) => section.classList.add("is-visible"));
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0 },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [selectedProduct, contactPage, exportPage]);

  const visibleProducts = useMemo(
    () =>
      products.filter(
        (p) =>
          (category === "All Categories" || p.category === category) &&
          `${p.name} ${p.category} ${p.origin}`
            .toLowerCase()
            .includes(query.toLowerCase()),
      ),
    [category, query],
  );

  return (
    <div className="site-shell">
      <div className="top-strip">
        <div className="top-inner">
          <span>
            <Mail size={15} /> suraj@veltarainternational.com
          </span>
          <span>
            <Phone size={15} /> +91 7892786875
          </span>
          <div className="socials">
            <a href="#facebook" aria-label="Facebook">
              <Facebook size={17} />
            </a>
            <a href="#instagram" aria-label="Instagram">
              <Instagram size={17} />
            </a>
            <a href="#linkedin" aria-label="LinkedIn">
              <Linkedin size={17} />
            </a>
          </div>
        </div>
      </div>
      <header className="main-header">
        <a className="brand" href="/#home" aria-label="Veltara International home">
          <img
            className="brand-logo"
            src="/veltara-international-logo.png"
            alt="Veltara International"
          />
        </a>
        <button
          className="mobile-menu"
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={
            menuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
        <nav
          id="primary-navigation"
          className={menuOpen ? "nav-links open" : "nav-links"}
        >
          <div className="mobile-nav-header">
            <a
              className="mobile-nav-brand"
              href="/#home"
              onClick={() => setMenuOpen(false)}
              aria-label="Veltara International home"
            >
              <img src="/veltara-international-logo.png" alt="Veltara International" />
            </a>
            <button
              type="button"
              className="mobile-nav-close"
              aria-label="Close navigation menu"
              onClick={() => setMenuOpen(false)}
            >
              <X />
            </button>
          </div>
          <div className="mobile-nav-links">
          <a
            href="/#home"
            className={!contactPage && !exportPage && !selectedProduct ? "active" : ""}
            onClick={() => setMenuOpen(false)}
          >
            Home
          </a>
          <a href="/#about" onClick={() => setMenuOpen(false)}>
            About Us
          </a>
          <div className={productsMenuOpen ? "nav-products-menu open" : "nav-products-menu"}>
            <button
              type="button"
              className="nav-products"
              aria-expanded={productsMenuOpen}
              onClick={() => setProductsMenuOpen((open) => !open)}
            >
              Products <ChevronDown size={14} />
            </button>
            <div className="nav-products-dropdown">
              {[
                "Rice & Flours",
                "Whole Spices",
                "Natural Sweeteners",
                "Fresh Vegetables",
                "Fresh Fruits",
              ].map((categoryName) => (
                <a
                  key={categoryName}
                  href="/#products"
                  onClick={(event) => {
                    if (
                      event.button !== 0 ||
                      event.metaKey ||
                      event.ctrlKey ||
                      event.shiftKey ||
                      event.altKey
                    ) {
                      return;
                    }
                    event.preventDefault();
                    setCategory(categoryName);
                    setMenuOpen(false);
                    setProductsMenuOpen(false);
                    window.requestAnimationFrame(() => {
                      document
                        .getElementById("products")
                        ?.scrollIntoView({ behavior: "smooth" });
                    });
                  }}
                >
                  {categoryName}
                </a>
              ))}
              <a
                className="nav-products-all"
                href="/#products"
                onClick={() => {
                  setMenuOpen(false);
                  setProductsMenuOpen(false);
                }}
              >
                View All Products
              </a>
            </div>
          </div>
          <a
            href="/export"
            className={exportPage ? "active" : ""}
            onClick={() => setMenuOpen(false)}
          >
            Export
          </a>
          <a
            href="/contact"
            className={contactPage ? "active" : ""}
            onClick={() => setMenuOpen(false)}
          >
            Contact Us
          </a>
          </div>
          <div className="mobile-nav-footer">
            <div className="mobile-nav-contact">
              <a href="mailto:suraj@veltarainternational.com">
                <Mail size={17} />
                suraj@veltarainternational.com
              </a>
              <a
                href="https://wa.me/917892786875"
                target="_blank"
                rel="noreferrer"
              >
                <Phone size={17} />
                +91 7892786875
              </a>
            </div>
            <div className="mobile-nav-socials">
              <a href="#" aria-label="Facebook"><Facebook /></a>
              <a href="#" aria-label="Instagram"><Instagram /></a>
              <a href="#" aria-label="LinkedIn"><Linkedin /></a>
            </div>
            <button
              type="button"
              className="mobile-nav-quote"
              onClick={() => openContact(null)}
            >
              Request a Quotation
            </button>
          </div>
        </nav>
        {menuOpen && (
          <button
            type="button"
            className="mobile-nav-backdrop"
            aria-label="Close navigation menu"
            onClick={() => setMenuOpen(false)}
          />
        )}
        <div className="header-actions">
          <div className="desktop-header-utilities">
            <div className="desktop-header-socials" aria-label="Social media links">
              <a href="#" aria-label="Facebook"><Facebook /></a>
              <a href="#" aria-label="Instagram"><Instagram /></a>
              <a href="#" aria-label="LinkedIn"><Linkedin /></a>
            </div>
            <a href="mailto:suraj@veltarainternational.com">
              <Mail size={16} /> suraj@veltarainternational.com
            </a>
            <a href="tel:+917892786875">
              <Phone size={16} /> +91 7892786875
            </a>
          </div>
          <label className="header-search">
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search products..."
            />
            <Search size={18} />
          </label>
          <button
            className="primary-btn"
            onClick={() => openContact(null)}
          >
            Enquire Now <ArrowRight size={17} />
          </button>
        </div>
      </header>

      <main id="home">
        {contactPage ? (
          <ContactPage
            key={contactProduct?.name || "general"}
            preselectedProduct={contactProduct}
          />
        ) : exportPage ? (
          <ExportPage onRequestQuote={() => openContact(null)} />
        ) : selectedProduct ? (
          <ProductDetailPage
            product={selectedProduct}
            onBack={closeProductDetails}
            onRequestQuote={openContact}
            onOpenProduct={openProductDetails}
          />
        ) : (
          <>
        <section
          className="hero"
        >
          <img
            key={heroImages[heroIndex]}
            className="hero-slide-image"
            src={heroImages[heroIndex]}
            alt=""
            aria-hidden="true"
          />
          <div className="hero-shade"></div>
          <div className="hero-content">
            <span className="eyebrow">Our Range</span>
            <h1>Your Sourcing Partner for Indian Agriculture</h1>
            <div className="gold-line"></div>
            <p>
              Connecting international buyers with India's diverse agricultural
              and food-product supply chain through
              <br className="desktop-break" /> reliable sourcing and coordinated
              export execution.
            </p>
          </div>
          <button
            className="hero-next"
            aria-label="Next slide"
            onClick={() =>
              setHeroIndex((current) => (current + 1) % heroImages.length)
            }
          >
            <ChevronRight />
          </button>
          <div className="hero-dots" aria-label="Hero slides">
            {heroImages.map((image, index) => (
              <button
                key={image}
                type="button"
                className={heroIndex === index ? "active" : ""}
                aria-label={`Show slide ${index + 1}`}
                aria-current={heroIndex === index ? "true" : undefined}
                onClick={() => setHeroIndex(index)}
              />
            ))}
          </div>
        </section>

        <section className="catalog-controls" id="products">
          <div className="control-inner">
            <div className="filter-label">
              <SlidersHorizontal size={18} />
              <span>Filter</span>
            </div>
            <div className="mode-toggle" role="group" aria-label="Sourcing focus">
              {["Export", "Buyer-specific"].map((item) => (
                <button
                  key={item}
                  className={mode === item ? "active" : ""}
                  onClick={() => setMode(item)}
                >
                  {item}
                </button>
              ))}
            </div>
            <label className="catalog-search">
              <Search size={18} />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search name, origin, spec..."
              />
            </label>
            <div className="category-pills">
              {categories.map((item) => (
                <button
                  key={item}
                  className={category === item ? "selected" : ""}
                  onClick={() => setCategory(item)}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </section>

        <section className="catalog">
          <div className="catalog-meta">
            <p>
              Showing <strong>{visibleProducts.length}</strong> premium{" "}
              {category === "All Categories"
                ? "products"
                : category.toLowerCase()}
            </p>
            <div className="quality-notes">
              <span>Reliable Sourcing</span>
              <i>•</i>
              <span>Buyer-led Specifications</span>
              <i>•</i>
              <span>Export Coordination</span>
            </div>
          </div>
          {visibleProducts.length ? (
            <div className="product-grid">
              {visibleProducts.map((product) => (
                <article className="product-card" key={product.name}>
                  <div className="product-photo">
                    <img
                      src={product.image}
                      alt={product.name}
                      loading="lazy"
                      decoding="async"
                    />
                    <ProductImageCredit credit={product.imageCredit} />
                    <span className="product-tag">{mode}</span>
                  </div>
                  <div className="product-info">
                    <span className="product-category">{product.category}</span>
                    <h3>{product.name}</h3>
                    <p>{product.desc}</p>
                    <div className="product-meta">
                      <div>
                        <span>Origin:</span>
                        <strong>{product.origin}</strong>
                      </div>
                      <div>
                        <span>MOQ:</span>
                        <strong>{product.moq || "Negotiable"}</strong>
                      </div>
                    </div>
                    <div className="product-bottom">
                      <a
                        className="details-btn"
                        href={`/products/${productSlug(product)}`}
                        onClick={(event) => {
                          if (
                            event.button !== 0 ||
                            event.metaKey ||
                            event.ctrlKey ||
                            event.shiftKey ||
                            event.altKey
                          ) {
                            return;
                          }
                          event.preventDefault();
                          openProductDetails(product);
                        }}
                      >
                        View Details
                      </a>
                      <button
                        className="quote-btn"
                        aria-label={`Enquire about ${product.name}`}
                        onClick={() => {
                          openContact(product);
                        }}
                      >
                        Get Quote <ArrowRight size={15} />
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="empty-state">
              <Search size={28} />
              <h3>No products found</h3>
              <p>Try another search term or choose a different category.</p>
              <button
                onClick={() => {
                  setQuery("");
                  setCategory("All Categories");
                }}
              >
                Clear filters
              </button>
            </div>
          )}
        </section>

        <section className="sourcing-flow" id="about">
          <div className="sourcing-flow-heading">
            <span>How We Operate</span>
            <h2>Our Quality Sourcing &amp; Delivery Flow</h2>
            <p>
              Secure procurement, careful verification and reliable export
              coordination for every buyer order.
            </p>
          </div>
          <div className="sourcing-flow-grid">
            <div className="sourcing-flow-line" aria-hidden="true" />
            {[
              {
                title: "Farmer Sourcing",
                text: "Responsible sourcing from verified origin suppliers.",
                image: "/images/products/green-cardamom.jpg",
                icon: <Sprout />,
                side: "left",
              },
              {
                title: "Quality Check",
                text: "Grade, purity and product specifications are checked.",
                image: "/images/products/cumin.jpg",
                icon: <ClipboardCheck />,
                side: "right",
              },
              {
                title: "Processing",
                text: "Whole spices are cleaned and prepared for the order.",
                image: "/images/products/coriander.jpg",
                icon: <Factory />,
                side: "left",
              },
              {
                title: "Packaging",
                text: "Customised buyer-led packing is completed securely.",
                image: "/images/products/fennel.jpg",
                icon: <Package />,
                side: "right",
              },
              {
                title: "Cargo Handling",
                text: "Packed consignments are moved for export coordination.",
                image: "/images/products/black-pepper.jpg",
                icon: <Warehouse />,
                side: "left",
              },
              {
                title: "Export Delivery",
                text: "Shipment is coordinated according to buyer requirements.",
                image: "/images/products/red-chilli.jpg",
                icon: <Ship />,
                side: "right",
              },
              {
                title: "Domestic Supply",
                text: "Reliable supply support is maintained for buyer needs.",
                image: "/images/products/dry-ginger.jpg",
                icon: <Truck />,
                side: "left",
              },
            ].map((step, index) => (
              <article
                className={`sourcing-step sourcing-step-${step.side}`}
                key={step.title}
              >
                <div className="sourcing-step-card">
                  <img src={step.image} alt="" />
                  <div>
                    <h3><span>{String(index + 1).padStart(2, "0")}</span>{step.title}</h3>
                    <p>{step.text}</p>
                  </div>
                </div>
                <span className="sourcing-step-icon">{step.icon}</span>
              </article>
            ))}
          </div>
        </section>
          </>
        )}
      </main>

      <footer id="contact">
        <div className="footer-main">
          <div className="footer-company">
            <a className="footer-brand" href="/#home">
              <img
                src="/veltara-international-logo.png"
                alt="Veltara International"
              />
            </a>
            <p>
              Indian whole-spice sourcing for international buyers, backed by
              buyer-led specifications and coordinated export enquiries.
            </p>
            <div className="footer-contact-list">
              <span>
                <Globe2 size={15} />
                43, 8th Cross, C Block, 1st Stage, JP Nagara, Mysuru - 570008,
                Karnataka, India
              </span>
              <a href="mailto:suraj@veltarainternational.com">
                <Mail size={15} /> suraj@veltarainternational.com
              </a>
              <a
                href="https://wa.me/917892786875"
                target="_blank"
                rel="noreferrer"
              >
                <Phone size={15} /> +91 7892786875 <small>(WhatsApp)</small>
              </a>
            </div>
            <div className="footer-socials" aria-label="Social media links">
              <a href="#" aria-label="Facebook"><Facebook /></a>
              <a href="#" aria-label="Instagram"><Instagram /></a>
              <a href="#" aria-label="LinkedIn"><Linkedin /></a>
            </div>
          </div>

          <div className="footer-column">
            <h3>Quick Links</h3>
            <a href="/#home"><ArrowRight size={12} /> Home</a>
            <a href="/#about"><ArrowRight size={12} /> About Us</a>
            <a href="/#products"><ArrowRight size={12} /> Products</a>
            <a href="/export"><ArrowRight size={12} /> Export</a>
            <a href="/contact"><ArrowRight size={12} /> Contact Us</a>
          </div>

          <div className="footer-column footer-products">
            <h3>Whole Spice Range</h3>
            {products.slice(0, 7).map((product) => (
              <a
                key={product.name}
                href={`/products/${productSlug(product)}`}
                onClick={(event) => {
                  if (
                    event.button !== 0 ||
                    event.metaKey ||
                    event.ctrlKey ||
                    event.shiftKey ||
                    event.altKey
                  ) {
                    return;
                  }
                  event.preventDefault();
                  openProductDetails(product);
                }}
              >
                {product.name}
              </a>
            ))}
            <a className="footer-view-all" href="/#products">
              View All Products ({products.length}) <ArrowRight size={12} />
            </a>
          </div>

          <div className="footer-column footer-destinations">
            <h3>Buyer Enquiry Destinations</h3>
            <div className="footer-destination-grid">
              {[
                "United Arab Emirates",
                "Singapore",
                "Saudi Arabia",
                "Malaysia",
                "Qatar",
                "Oman",
                "Kuwait",
                "Africa",
                "Rest of the World",
              ].map((destination) => (
                <a
                  key={destination}
                  href="/contact"
                  onClick={(event) => {
                    event.preventDefault();
                    openContact(null);
                  }}
                >
                  {destination}
                </a>
              ))}
            </div>
            <a
              className="footer-whatsapp"
              href="https://wa.me/917892786875"
              target="_blank"
              rel="noreferrer"
            >
              <Phone size={16} /> WhatsApp Export Enquiry
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <small>
            © {new Date().getFullYear()} Veltara International. All rights reserved.
          </small>
          <div>
            <a href="/#about">About Us</a>
            <a href="/contact">Enquire Now</a>
          </div>
        </div>
      </footer>

    </div>
  );
}

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
