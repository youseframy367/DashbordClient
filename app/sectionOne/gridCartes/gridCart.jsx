import Cart from "./cart";

export default function GridCart() {
  const cardsData = [
    {
      icon: "/img/iconCartOne.svg",
      title: "Open Connections",
      count: "50.8K",
      percentage: 28.4,
    },
    {
      icon: "/img/totleCustomer.svg",
      title: "Total Customers",
      count: "23.6K",
      percentage: -12.6,
    },
    {
      icon: "/img/iconOnline.svg",
      title: "Online Users",
      count: "756",
      percentage: 3.1,
    },
    {
      icon: "/img/piaUserIcon.svg",
      title: "Paid Users",
      count: "2.3K",
      percentage: 11.3,
    },
    {
      icon: "/img/ActivSuscriptionIcon.svg",
      title: "Active Subscriptions",
      count: "50.8K",
      percentage: 28.4,
    },
    {
      icon: "/img/totleRevinuIcon.svg",
      title: "Total Revenue",
      count: "23.6K",
      percentage: -12.6,
    },
    {
      icon: "/img/ConversionRate.svg",
      title: "Conversion Rate",
      count: "756",
      percentage: 3.1,
    },
    {
      icon: "/img/following.svg",
      title: "Trial Users",
      count: "2.3K",
      percentage: 11.3,
    },
  ];


  return (
    /* 1. استخدمنا grid بدلاً من flex لتنظيم الكروت في صفوف وأعمدة.
       2. grid-cols-1 للموبايل، grid-cols-2 للتابلت، grid-cols-4 للشاشات الكبيرة.
       3. gap-6 تعطي مساحة تنفس بين الكروت.
    */
    <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-2">
      {cardsData.map((item, index) => (
        // قمنا بتصحيح ترتيب المتغيرات: item هو الكائن، و index هو الترتيب الرقمي
        <Cart key={index} icon={item.icon} title={item.title}  count={item.count} percentage={item.percentage} />
      ))}
    </div>
  );
}