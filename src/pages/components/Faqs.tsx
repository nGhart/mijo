import Accordion from "../../components/common/Accordion";
import HeaderOne from "../../components/common/HeaderOne";
import Reveal from "../../components/common/Reveal";

const Faqs = () => {
  const faqs = [
    {
      title: "About MIJO",
      questions: [
        {
          title: "Why MIJO?",
          content:
            "MIJO is a Ghanaian-owned, tech-enabled delivery service integrated into the GhanaPostGPS app. The name 'MIJO' comes from an Ewe phrase meaning 'let’s go'. The service allows individuals and businesses to send packages securely and efficiently using precise digital addresses.",
        },
        {
          title: "How do I download and install the MIJO app?",
          content:
            "MIJO is not a separate app. It is a feature within the updated GhanaPostGPS app. Existing users simply need to update the app. New users can download GhanaPostGPS from the Google Play Store or Apple App Store.",
        },
        {
          title: "How do I create an account?",
          content:
            "If you already have the GhanaPostGPS app, just update it. New users can download the app and register using their Ghana Card and a valid Ghanaian phone number.",
        },
        {
          title: "How can I contact MIJO Services?",
          content:
            "Call: 0540127407 / 0257962003. WhatsApp: 0257962003. Social Media: Facebook, Twitter, Instagram.",
        },
      ],
    },
    {
      title: "App and Features",
      questions: [
        {
          title: "How do I request a delivery?",
          content:
            "Open the GhanaPostGPS App, tap on 'MIJO Delivery', enter pickup and drop-off digital addresses, add a delivery note, and confirm your request.",
        },
        {
          title: "How are delivery fees calculated?",
          content:
            "Delivery fees are based on distance and partner tier (Express or Standard). The final fee is shown before confirmation.",
        },
        {
          title: "Can I cancel a delivery?",
          content:
            "Yes, you can cancel for free before dispatch. A cancellation fee may apply if a Mijo Partner is already en route.",
        },
        {
          title: "Can I change the destination after booking?",
          content: "Yes, you can modify the destination after booking.",
        },
        {
          title: "Can I schedule a delivery?",
          content:
            "Currently, MIJO supports only on-demand deliveries. Scheduled deliveries will be introduced soon.",
        },
      ],
    },
    {
      title: "Account and Data",
      questions: [
        {
          title: "How do I sign up for MIJO?",
          content:
            "Use the GhanaPostGPS app with your Ghana Card and a valid phone number.",
        },
        {
          title: "How do I update my profile?",
          content:
            "Go to the 'Account' section in the app to edit your details.",
        },
        {
          title: "Can I delete my account?",
          content: "Yes. Request deletion via the in-app support.",
        },
        {
          title: "What security features are in place?",
          content:
            "All Mijo Partners are vetted based on requested documents. Real-time tracking is available, and users can rate and give feedback on Mijo Partners in-app.",
        },
      ],
    },
    {
      title: "Payment and Pricing",
      questions: [
        {
          title: "What payment methods are accepted?",
          content:
            "MIJO Wallet, Mobile Money (MTN, Vodafone, AirtelTigo), and Cash.",
        },
        {
          title: "Why is my price higher than expected?",
          content:
            "Delays, distance changes, or traffic conditions may affect the final pricing.",
        },
        {
          title: "Issue with cancellation fee?",
          content:
            "You can report any issue via the in-app Help & Support section.",
        },
        {
          title: "How do I get a delivery receipt?",
          content:
            "Receipts are sent via email (if provided) or can be found in your delivery history.",
        },
      ],
    },
    {
      title: "Using MIJO",
      questions: [
        {
          title: "How do I contact the delivery partner?",
          content:
            "You can contact the delivery partner via in-app messaging or calling options after your request is matched.",
        },
        {
          title: "What if the delivery partner's vehicle is in poor condition?",
          content:
            "Report the issue using the rating and feedback feature or contact MIJO support.",
        },
        {
          title: "What safety features are in place?",
          content:
            "Mijo Partner and vehicle details are shared, and each delivery request includes a PIN code.",
        },
        {
          title: "How can I track my driver?",
          content:
            "Tracking starts once the Mijo Partner accepts your request.",
        },
        {
          title: "What if I cancel my delivery?",
          content:
            "There is no charge if cancelled before dispatch. A cancellation fee applies if the Mijo Partner is already en route.",
        },
        {
          title: "How do I rate my experience?",
          content:
            "After delivery, you can rate and provide feedback using the pop-up prompt.",
        },
        {
          title: "How do I check my delivery history?",
          content: "Go to 'Trip History' in the app.",
        },
        {
          title: "Can I request multiple stops?",
          content:
            "Yes, you can add multiple stops during the delivery request setup.",
        },
        {
          title: "How long will my driver wait?",
          content:
            "The standard wait time is three (3) minutes. Additional wait time may incur extra charges.",
        },
      ],
    },
    {
      title: "Partner / Driver",
      questions: [
        {
          title: "How do I become a MIJO Partner?",
          content:
            "Download the MIJO Partner App, register with valid documents, and begin delivering after approval.",
        },
        {
          title: "How does the Partner App work?",
          content:
            "Once verified, partners receive delivery requests via the app. Accept, pick up, deliver, and receive payment directly in your wallet or mobile money.",
        },
        {
          title: "What if I encounter a difficult customer?",
          content:
            "Use the in-app contact options or report the incident to MIJO support.",
        },
        {
          title: "How much do I pay to start working?",
          content:
            "After document verification, partners receive a one-day free trial. After the trial, a daily subscription fee of GHS 24 is required to continue accepting delivery requests.",
        },
        {
          title: "How many deliveries can I make in a day?",
          content:
            "Once the GHS 24 daily subscription is paid, partners can make unlimited deliveries for that day. The subscription expires at 12:00 midnight.",
        },
      ],
    },
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-8 p-4 py-[100px] lg:py-[120px]">
      <HeaderOne
        title="Frequently asked questions"
        subtitle="Clear, simple answers to help you get started."
      />
      <div className="space-y-4">
        {faqs.slice(0, 4).map((section, i) => (
          <Reveal direction="up" delay={i * 150}>
            <Accordion items={section.questions} title={section.title} />
          </Reveal>
        ))}
      </div>
    </div>
  );
};

export default Faqs;
