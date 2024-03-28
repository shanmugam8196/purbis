import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import TermsandConditions from "../components/TermsandConditions";
import RefundPolicy from "../components/RefundPolicy";
import PrivacyPolicy from "../components/PrivacyPolicy";
import DeliveryandShippingPolicy from "../components/DeliveryandShippingPolicy";
import DisclaimerPolicy from "../components/DisclaimerPolicy";


const Home = lazy(() => import("../pages/Home"));
const NotFound = lazy(() => import("../pages/NotFound"));
const Thankyou = lazy(() => import("../pages/Thankyou"));
const FormPage = lazy(() => import("../pages/FormPage"));
const OnlineGroceryDeliverySoftware = lazy(() =>
  import("../pages/OnlineGroceryDeliverySoftware")
);
const LaundryDeliverySoftware = lazy(() =>
  import("../pages/LaundryDeliverySoftware")
);

const FuelOrdering = lazy(() =>
  import("../pages/FuelOrdering")
);

const TaxiDispatchSoftware = lazy(() =>
  import("../pages/TaxiDispatchSoftware")
);


const PizzaDeliverySoftware = lazy(() =>
  import("../pages/PizzaDeliverySoftware")
);

const DoctorAppointmentBookingApp = lazy(() =>
  import("../pages/DoctorAppointmentBookingApp")
);

const FlowerOrderingDeliverySystem = lazy(() =>
  import("../pages/FlowerOrderingDeliverySystem")
);
const CourierParcelDeliverySoftware = lazy(() =>
  import("../pages/CourierParcelDeliverySoftware")
);

const ZomatoClone = lazy(() =>
  import("../pages/ZomatoClone")
);

const SwiggyClone = lazy(() =>
  import("../pages/SwiggyClone")
);

const UberEatsClone = lazy(() =>
  import("../pages/UberEatsClone")
);

const Integration = lazy(() =>
  import("../pages/Integration")
);


const Technology = lazy(() =>
  import("../pages/Technology")
);



const ContactUs = lazy(() =>
  import("../pages/ContactUs")
);


const FoodDeliverySoftware = lazy(() =>
  import("../pages/FoodDeliverySoftware")
);

const TalabatClone = lazy(() =>
  import("../pages/TalabatClone")
);

const FoodpandaClone = lazy(() =>
  import("../pages/FoodpandaClone")
);
const DeliverooClone = lazy(() =>
  import("../pages/DeliverooClone")
);
const GojekClone = lazy(() =>
  import("../pages/GojekClone")
);
const WoltClone = lazy(() =>
  import("../pages/WoltClone")
);
const DunzoClone = lazy(() =>
  import("../pages/DunzoClone")
);
const PostmatesClone = lazy(() =>
  import("../pages/PostmatesClone")
);
const IfoodClone = lazy(() =>
  import("../pages/IfoodClone")
);
const MenulogClone = lazy(() =>
  import("../pages/MenulogClone")
);
const JustEatClone = lazy(() =>
  import("../pages/JustEatClone")
);

const HungerstationClone = lazy(() =>
  import("../pages/HungerstationClone")
);

const DeliveryClone = lazy(() =>
  import("../pages/DeliveryClone")
);

const DoorDashClone = lazy(() =>
  import("../pages/DoorDashClone")
);

const UberClone = lazy(() =>
  import("../pages/UberClone")
);





const PreLoader = () => {
  return (
    <div className="preloader">
      <div className="logo">
        <img src="images/logo.png" alt="purbis" />
      </div>
    </div>
  );
};

const RouterConfig = () => {
  return (
    <Suspense fallback={<PreLoader />}>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route
          path="/online-grocery-delivery-software.php"
          element={<OnlineGroceryDeliverySoftware />}
        />
        <Route
          path="/laundry-delivery-software.php"
          element={<LaundryDeliverySoftware />}
        />
        <Route
          path="/online-fuel-ordering-software.html"
          element={<FuelOrdering />}
        />
        <Route
          path="/taxi-dispatch-software"
          element={<TaxiDispatchSoftware />}
        />
        <Route
          path="/courier-parcel-delivery-software.html"
          element={<CourierParcelDeliverySoftware />}
        />

        <Route
          path="/food-delivery-software"
          element={<FoodDeliverySoftware />}
        />
        <Route
          path="/online-pizza-ordering-system.html"
          element={<PizzaDeliverySoftware />}
        />
        <Route
          path="/doctor-appointment-booking-software.php"
          element={<DoctorAppointmentBookingApp />}
        />
        <Route
          path="/online-flower-delivery-software.html"
          element={<FlowerOrderingDeliverySystem />}
        />

        <Route
          path="/zomato-clone.php"
          element={<ZomatoClone />}
        />
        <Route
          path="/swiggy-clone"
          element={<SwiggyClone />}
        />
        <Route
          path="/ubereats-clone"
          element={<UberEatsClone />}
        />
        <Route
          path="/talabat-clone"
          element={<TalabatClone />}
        />
        <Route
          path="/foodpanda-clone.php"
          element={<FoodpandaClone />}
        />
        <Route path="/deliveroo-clone"
          element={<DeliverooClone />}
        />
        <Route path="/gojek-clone"
          element={<GojekClone />}
        />
        <Route path="/wolt-clone"
          element={<WoltClone />}
        />
        <Route path="/dunzo-clone"
          element={<DunzoClone />}
        />
        <Route path="/postmates-clone"
          element={<PostmatesClone />}
        />
        <Route path="/ifood-clone"
          element={<IfoodClone />}
        />
        <Route path="/menulog-clone"
          element={<MenulogClone />}
        />
        <Route path="/justeat-clone.php"
          element={<JustEatClone />}
        />
        <Route path="/hungerstation-clone"
          element={<HungerstationClone />}
        />
        <Route path="/delivery-com-clone"
          element={<DeliveryClone />}
        />
        <Route path="/doordash-clone"
          element={<DoorDashClone />}
        />
        <Route path="/uber-for-x"
          element={<UberClone />}
        />
        <Route path="/third-party-integration"
          element={<Integration />}
        />
        <Route path="/tools-and-technology.php"
          element={<Technology />}
        />

        <Route
          path="/contact-us.php"
          element={<ContactUs />}
        />

        <Route
          path="/termsconditions.php"
          element={<TermsandConditions />}
        />
        <Route
          path="/refund-policy.php"
          element={<RefundPolicy />}
        />
        <Route
          path="/privacy-policy.php"
          element={<PrivacyPolicy />}
        />
        <Route
          path="/delivery-shipping.php"
          element={<DeliveryandShippingPolicy />}
        />
        <Route
          path="/disclaimer.php"
          element={<DisclaimerPolicy />}
        />
        <Route path="/thankyou" exact element={<Thankyou />} />
        <Route path="/request-for-demo" exact element={<FormPage />} />
        <Route path="*" exact element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};

export default RouterConfig;
