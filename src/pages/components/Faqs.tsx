import React from "react";
import Accordion from "../../components/common/Accordion";
import HeaderOne from "../../components/common/HeaderOne";

const Faqs = () => {
  const questions = [
    {
      title: "How is my ride fare calculated?",
      content:
        "Fares are calculated based on a base rate, the estimated time and distance of the trip, and current demand. You will always see an upfront price estimate before you confirm your booking. Please note that tolls and surcharges may be added to the final amount.",
    },
    {
      title: "Can I schedule a ride in advance?",
      content:
        "Yes! You can schedule a ride up to 30 days in advance. simply tap the clock icon next to the 'Where to?' box, set your desired pickup date and time, and confirm your location.",
    },
    {
      title: "What payment methods do you accept?",
      content:
        "We accept major credit and debit cards, digital wallets (such as Apple Pay, Google Pay, and PayPal), and in select regions, cash payments. You can manage your payment methods in the 'Wallet' section of the app.",
    },
    {
      title: "How do I track my delivery order?",
      content:
        "Once your order is confirmed, you can track it in real-time through the app. You will see the courier's location on the map, their estimated time of arrival, and updates at every stage—from pickup to drop-off.",
    },
    {
      title: "I left an item in a vehicle. How can I retrieve it?",
      content:
        "If you lost an item, go to the 'Your Trips' section in the app menu, select the trip where the item was lost, and tap 'I lost an item.' This will allow you to contact the driver directly to arrange a return. If you cannot reach the driver, contact our support team.",
    },
    {
      title: "What safety features does the app offer?",
      content:
        "Your safety is our priority. Our app includes an in-app emergency button, the ability to share your live trip status with trusted contacts, ride check-ins if a vehicle stops unexpectedly, and 24/7 safety support.",
    },
    {
      title: "Can I change my destination after the trip has started?",
      content:
        "Yes, you can edit your destination mid-trip. Tap the destination bar on your screen and enter the new address. The driver will be automatically updated, and your fare will be adjusted based on the new distance and time.",
    },
    {
      title: "How do I apply a promo code?",
      content:
        "To use a promo code, open the menu and select 'Wallet' or 'Payment.' Scroll down to 'Promotions,' tap 'Add Promo Code,' and enter your code. Valid discounts will automatically apply to your next eligible ride or delivery.",
    },
    {
      title: "What should I do if my delivery is missing items?",
      content:
        "If your order arrived with missing or incorrect items, please go to the 'Orders' tab, select the relevant order, and tap 'Get Help.' Select 'Missing or Incorrect Items,' and our support team will issue a refund or arrange a redelivery.",
    },
    {
      title: "How do I delete my account?",
      content:
        "If you wish to delete your account, go to 'Settings,' select 'Privacy,' and tap 'Delete Account.' You will be asked to confirm your identity. Please note that account deletion is permanent and you will lose your ride history and rewards.",
    },
  ];
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <HeaderOne
        title="Frequently asked questions"
        subtitle="Clear, simple answers to help you get started."
      />
      <Accordion items={questions} />
    </div>
  );
};

export default Faqs;
