import { ContactForm } from "@/components/ContactForm";
import { getPersonalInfo } from "@/lib/index";
import { PersonalInfo } from "@/lib/types";
import { MailIcon, HomeIcon, PhoneCall } from "lucide-react";

const Contact = async () => {
  const personalinfoResult = await getPersonalInfo();
  const personalinfos: PersonalInfo[] =
    (personalinfoResult as { personalinfos: PersonalInfo[] })?.personalinfos ||
    [];
  const personalinfo = personalinfos[0];

  return (
    <section>
      <div className="container mx-auto">
        {/* text & illustration */}
        <div className="grid lg:grid-cols-2 py-12 lg:h-[480px] mb-6 xl:mb-44">
          {/* text */}
          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-x-4 text-primary text-lg mb-4">
              <span className="w-[30px] h-[2px] bg-primary"></span>
              Say Hello
            </div>
            <h1 className="h1 max-w-md mb-8">Let's Work Together.</h1>
            <p className="subtitle max-w-[400px]">
              Welcome to my contact page! If you have any questions, feedback,
              or inquiries, please feel free to reach out using the contact form
              below. Additionally, if you prefer a more personal touch, I'm
              available for online meetings. Just let me know your preferred
              times in the contact form, and I'll do my best to accommodate. I
              look forward to hearing from you!
            </p>
          </div>
          {/* illustration */}
          <div className="hidden lg:flex w-full bg-contact_illustration_light dark:bg-contact_illustration_dark bg-contain bg-top bg-no-repeat"></div>
        </div>
        {/* info text & form */}
        <div className="grid lg:grid-cols-2 mb-24 lg:mb-32">
          {/* info text */}
          <div className="flex flex-col gap-y-4 xl:gap-y-14 mb-12 xl:mb-24 text-base xl:text-lg">
            {/* mail */}
            <div className="flex items-center gap-x-8">
              <MailIcon size={18} className="text-primary" />
              <div>{personalinfo.email}</div>
            </div>
            {/* address */}
            <div className="flex items-center gap-x-8">
              <HomeIcon size={18} className="text-primary" />
              <div>{personalinfo.address}</div>
            </div>
            {/* mail */}
            <div className="flex items-center gap-x-8">
              <PhoneCall size={18} className="text-primary" />
              <div>{personalinfo.phonenumber}</div>
            </div>
          </div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;
