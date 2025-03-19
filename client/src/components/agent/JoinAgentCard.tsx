import { useEffect, useRef, useState } from "react";
import {
  bagIcon,
  facebookIcon,
  instagramIcon,
  keyGrayIcon,
  linkedinIcon,
  plusIcon,
  pointIcon,
  tiktokIcon1,
  youtubeIcon,
} from "../../assets/icons";
import { IoClose } from "react-icons/io5";
import { gsap } from "gsap";

const JoinAgentCard = () => {
  const [points] = useState(0);
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const proposalDropDownRef = useRef<HTMLDivElement>(null);
  const marketingProposalDropDownRef = useRef<HTMLDivElement>(null);
  const [showmarketingDropDown, setShowMarketingDropDown] = useState(false);
  const [showProposalDropDown, setShowProposalDropDown] = useState(false);
  const [selectedProposals, setSelectedProposals] = useState<string[]>([]);
  const [selectedMarketing, setSelectedMarketing] = useState<string[]>([]);
  const modalRef = useRef<HTMLDivElement>(null);

  const [formData, setFormData] = useState({
    licenseNumber: "",
    email: "",
    phoneNumber: "",
    aboutMe: "",
    socialMedia: {
      facebook: "",
      instagram: "",
      linkedin: "",
      youtube: "",
      tiktok: "",
    },
    serviceProposal: [],
    marketingProposal: [],
    serviceFee: {
      residential: { rent: 0.3, sale: 1 },
      commercial: { lease: 0.3, sale: 1 },
      business: { sale: 1 },
    },
  });
  //to handle changes in the form
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  //Create a handleSubmit function to send data to the backend:
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/agents", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        alert("Agent registered successfully");
        setFormData({ ...initialFormData }); // Clear form after success
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to register agent");
    }
  };

  const proposalOptions = [
    "Property valuation & market analysis",
    "Property management",
    "home staging services",
    "interior & exterior painting",
    "deep clearing services",
    "decluttering services",
    "minor repairs & maintenance",
    "energy efficiency services",
    "virtual staging & 3D tours",
    "professional photography & videography",
    "floor plan & site plan services",
    "Home inspection services",
    "roof & gutter services",
    "pest control services",
    "storage & moving services",
    "luxury upgrade consulting",
    "negotiation & closing services",
  ];

  const marketingOptions = [
    {
      title: "Traditional Marketing Strategies",
      list: [
        "direct mail campaigns",
        "billboard advertising",
        "newspaper advertising",
        "television advertising",
        "flyer & brochure distribution",
        "open house & site visites",
      ],
    },
    {
      title: "Digital Marketing Strategies",
      list: [
        "social media advertising",
        "email marketing",
        "search engine optimization",
        "pay-per-click advertising",
        "content marketing",
        "video marketing",
        "influencer marketing",
        "affiliate marketing",
      ],
    },
  ];

  // Handle outside click for proposal dropdown
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        proposalDropDownRef.current &&
        !proposalDropDownRef.current.contains(e.target as Node)
      ) {
        setShowProposalDropDown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [proposalDropDownRef]);

  // Handle outside click for marketing dropdown
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        marketingProposalDropDownRef.current &&
        !marketingProposalDropDownRef.current.contains(e.target as Node)
      ) {
        setShowMarketingDropDown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [marketingProposalDropDownRef]);

  // Handle proposal selection
  const handleProposalSelect = (proposal: string) => {
    if (selectedProposals.includes(proposal)) {
      setSelectedProposals(
        selectedProposals.filter((item) => item !== proposal)
      );
    } else {
      setSelectedProposals([...selectedProposals, proposal]);
    }
  };

  // Handle marketing selection
  const handleMarketingSelect = (marketing: string) => {
    if (selectedMarketing.includes(marketing)) {
      setSelectedMarketing(
        selectedMarketing.filter((item) => item !== marketing)
      );
    } else {
      setSelectedMarketing([...selectedMarketing, marketing]);
    }
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        setShowRegisterModal(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [modalRef]);

  useEffect(() => {
    if (showRegisterModal) {
      gsap.fromTo(
        modalRef.current,
        { y: "100%", opacity: 0 },
        { y: "0%", opacity: 1, duration: 0.5, ease: "power2.out" }
      );
    }
  }, [showRegisterModal]);

  return (
    <>
      <div className="w-full max-w-[258px] h-[538px] bg-white rounded-[20px] flex flex-col px-5 py-4 gap-1 border-[#F2F2F2] border-[1px]">
        <div className="w-full h-full flex flex-col gap-3 items-center justify-center rounded-[12px] overflow-hidden">
          <div
            onClick={() => setShowRegisterModal(true)}
            className="size-[44px] bg-[#68BA6B] rounded-full cursor-pointer flex items-center justify-center"
          >
            <img src={plusIcon} alt="View icon" className="size-[20px]" />
          </div>
          <p className="text-[#757575] text-[min(3vw,12px)] font-bold">
            Click to join as an agent
          </p>
        </div>
      </div>

      {showRegisterModal && (
        <div className="w-full flex items-center justify-center bg-black/20 h-screen fixed top-0 left-0 z-[4000]">
          <div
            ref={modalRef}
            className="w-full max-w-[650px] h-full max-h-[572px] rounded-[30px] drop-shadow-md bg-white p-7 gap-2 overflow-hidden"
          >
            <div className="w-full flex flex-row justify-end items-center">
              <div className="w-[185px] h-[32px] bg-[#FFF8E2] rounded-l-full p-py-2 px-3 rounded-r-full flex flex-row items-center gap-2 justify-between">
                <p className="text-[#AA7F00] text-[min(3vw,12px)] font-medium">
                  NetRent Points
                </p>
                <img
                  src={pointIcon}
                  alt="Points icon"
                  className="size-[22px]"
                />
                <p className="text-[#AA7F00] text-[min(3vw,12px)] font-bold">
                  {points} / 10
                </p>
              </div>
            </div>

            <form className="w-full h-[calc(100%-20px)] overflow-y-auto flex flex-col gap-12 py-5">
              <div className="w-full flex flex-col items-center gap-7">
                <div className="w-full flex flex-row items-center justify-center gap-2">
                  <p className="text-[min(3vw,16px)] text-[#2d2d2] font-bold">
                    License number
                  </p>

                  <div className="w-[46px] h-[22px] p-1 bg-[#FFF8E2] rounded-l-full rounded-r-full items-center justify-center flex flex-row gap-1">
                    <img
                      src={pointIcon}
                      alt="Points icon"
                      className="size-[15px]"
                    />
                    <p className="text-[#AA7F00] text-[min(3vw,14px)] font-bold">
                      X 1
                    </p>
                  </div>
                </div>

                <div className="w-full max-w-[422px] flex flex-col gap-1">
                  <p className="text-[min(3vw,10px)] text-[#2D2D2D] font-medium">
                    Licence number
                  </p>
                  <div className="w-full h-[43px] rounded-r-full rounded-l-full bg-white border-[#F2F2F2] border-[1px]">
                    <input
                      type="text"
                      placeholder="123 1455 "
                      className="w-full text-[12px] px-4 h-full p-2 focus:outline-none"
                    />
                  </div>
                </div>
              </div>

              <div className="w-full flex flex-col items-center gap-7">
                <div className="w-full flex flex-row items-center justify-center gap-2">
                  <p className="text-[min(3vw,16px)] text-[#2d2d2] font-bold">
                    Email
                  </p>

                  <div className="w-[46px] h-[22px] p-1 bg-[#FFF8E2] rounded-l-full rounded-r-full items-center justify-center flex flex-row gap-1">
                    <img
                      src={pointIcon}
                      alt="Points icon"
                      className="size-[15px]"
                    />
                    <p className="text-[#AA7F00] text-[min(3vw,14px)] font-bold">
                      X 1
                    </p>
                  </div>
                </div>

                <div className="w-full max-w-[422px] flex flex-col gap-1">
                  <p className="text-[min(3vw,10px)] text-[#2D2D2D] font-medium">
                    Email
                  </p>
                  <div className="w-full h-[43px] rounded-r-full rounded-l-full bg-white border-[#F2F2F2] border-[1px]">
                    <input
                      type="text"
                      placeholder="netrent@email.com"
                      className="w-full text-[12px] px-4 h-full p-2 focus:outline-none"
                    />
                  </div>
                </div>
              </div>

              <div className="w-full flex flex-col items-center gap-7">
                <div className="w-full flex flex-row items-center justify-center gap-2">
                  <p className="text-[min(3vw,16px)] text-[#2d2d2] font-bold">
                    Phone number
                  </p>

                  <div className="w-[46px] h-[22px] p-1 bg-[#FFF8E2] rounded-l-full rounded-r-full items-center justify-center flex flex-row gap-1">
                    <img
                      src={pointIcon}
                      alt="Points icon"
                      className="size-[15px]"
                    />
                    <p className="text-[#AA7F00] text-[min(3vw,14px)] font-bold">
                      X 1
                    </p>
                  </div>
                </div>

                <div className="w-full max-w-[422px] flex flex-col gap-1">
                  <p className="text-[min(3vw,10px)] text-[#2D2D2D] font-medium">
                    Phone Number
                  </p>
                  <div className="w-full h-[43px] rounded-r-full rounded-l-full bg-white border-[#F2F2F2] border-[1px]">
                    <input
                      type="text"
                      placeholder="+6112345647"
                      className="w-full text-[12px] px-4 h-full p-2 focus:outline-none"
                    />
                  </div>
                </div>
              </div>

              <div className="w-full flex flex-col items-center gap-7">
                <div className="w-full flex flex-row items-center justify-center gap-2">
                  <p className="text-[min(3vw,16px)] text-[#2d2d2] font-bold">
                    About Me
                  </p>

                  <div className="w-[46px] h-[22px] p-1 bg-[#FFF8E2] rounded-l-full rounded-r-full items-center justify-center flex flex-row gap-1">
                    <img
                      src={pointIcon}
                      alt="Points icon"
                      className="size-[15px]"
                    />
                    <p className="text-[#AA7F00] text-[min(3vw,14px)] font-bold">
                      X 1
                    </p>
                  </div>
                </div>

                <div className="w-full max-w-[422px] flex flex-col gap-1">
                  <p className="text-[min(3vw,10px)] text-[#2D2D2D] font-medium">
                    About
                  </p>
                  <div className="w-full h-[150px] rounded-[16px] bg-white border-[#F2F2F2] border-[1px]">
                    <div className="w-full h-[30px] border-b-[#F2F2F2] border-b-[1px]"></div>
                    <textarea
                      placeholder="lorem..."
                      maxLength={200}
                      className="w-full text-[12px] px-4 h-full p-2 focus:outline-none"
                    />
                  </div>
                </div>
              </div>

              <div className="w-full flex flex-col items-center gap-7">
                <div className="w-full flex flex-row items-center justify-center gap-2">
                  <p className="text-[min(3vw,16px)] text-[#2d2d2] font-bold">
                    Social media links
                  </p>

                  <div className="w-[50px] h-[22px] p-1 bg-[#FFF8E2] rounded-l-full rounded-r-full items-center justify-center flex flex-row gap-1">
                    <img
                      src={pointIcon}
                      alt="Points icon"
                      className="size-[15px]"
                    />
                    <p className="text-[#AA7F00] text-[min(3vw,14px)] font-bold">
                      X 5
                    </p>
                  </div>
                </div>

                <div className="w-full max-w-[422px] flex flex-col gap-1">
                  <p className="text-[min(3vw,10px)] text-[#2D2D2D] font-medium">
                    social media links
                  </p>
                  <div className="w-full flex flex-col gap-5">
                    <div className="w-full h-[43px] rounded-r-full flex flex-row gap-2 items-center p-2 rounded-l-full bg-white border-[#F2F2F2] border-[1px]">
                      <img
                        src={facebookIcon}
                        alt="Points icon"
                        className="size-[20px]"
                      />
                      <input
                        type="text"
                        placeholder="facebook.com/Your profile"
                        className="w-full text-[12px] px-2 h-full p-2 focus:outline-none"
                      />
                    </div>

                    <div className="w-full h-[43px] rounded-r-full flex flex-row gap-2 items-center p-2 rounded-l-full bg-white border-[#F2F2F2] border-[1px]">
                      <img
                        src={instagramIcon}
                        alt="Points icon"
                        className="size-[20px]"
                      />
                      <input
                        type="text"
                        placeholder="instagram.com/Your profile"
                        className="w-full text-[12px] px-2 h-full p-2 focus:outline-none"
                      />
                    </div>

                    <div className="w-full h-[43px] rounded-r-full flex flex-row gap-2 items-center p-2 rounded-l-full bg-white border-[#F2F2F2] border-[1px]">
                      <img
                        src={linkedinIcon}
                        alt="Points icon"
                        className="size-[20px]"
                      />
                      <input
                        type="text"
                        placeholder="linkedin.com/Your profile"
                        className="w-full text-[12px] px-2 h-full p-2 focus:outline-none"
                      />
                    </div>

                    <div className="w-full h-[43px] rounded-r-full flex flex-row gap-2 items-center p-2 rounded-l-full bg-white border-[#F2F2F2] border-[1px]">
                      <img
                        src={youtubeIcon}
                        alt="Points icon"
                        className="size-[20px]"
                      />
                      <input
                        type="text"
                        placeholder="youtube.com/Your profile"
                        className="w-full text-[12px] px-2 h-full p-2 focus:outline-none"
                      />
                    </div>

                    <div className="w-full h-[43px] rounded-r-full flex flex-row gap-2 items-center p-2 rounded-l-full bg-white border-[#F2F2F2] border-[1px]">
                      <img
                        src={tiktokIcon1}
                        alt="Points icon"
                        className="size-[20px]"
                      />
                      <input
                        type="text"
                        placeholder="tiktok.com/Your profile"
                        className="w-full text-[12px] px-2 h-full p-2 focus:outline-none"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Service Proposal Dropdown */}
              <div className="w-full flex flex-col items-center gap-7">
                <div className="w-full flex flex-row items-center justify-center gap-2">
                  <p className="text-[min(3vw,16px)] text-[#2d2d2] font-bold">
                    Service Proposal
                  </p>
                  <div className="w-[46px] h-[22px] p-1 bg-[#FFF8E2] rounded-l-full rounded-r-full items-center justify-center flex flex-row gap-1">
                    <img
                      src={pointIcon}
                      alt="Points icon"
                      className="size-[15px]"
                    />
                    <p className="text-[#AA7F00] text-[min(3vw,14px)] font-bold">
                      X 1
                    </p>
                  </div>
                </div>

                <div className="w-full max-w-[422px] flex flex-col gap-1">
                  <p className="text-[min(3vw,10px)] text-[#2D2D2D] font-medium">
                    Service Proposal
                  </p>
                  <div
                    ref={proposalDropDownRef}
                    className="w-full h-[43px] rounded-r-full items-center relative flex flex-row gap-4 cursor-pointer rounded-l-full bg-white border-[#F2F2F2] border-[1px]"
                  >
                    <div
                      onClick={() =>
                        setShowProposalDropDown(!showProposalDropDown)
                      }
                      className="flex flex-row gap-4 p-2 items-center"
                    >
                      <div className="size-[25px] bg-gray-200 rounded-full overflow-hidden flex items-center justify-center">
                        <img
                          src={keyGrayIcon}
                          alt="Key icon"
                          className="w-[12px] h-[7px]"
                        />
                      </div>
                      {selectedProposals.length > 0 ? (
                        <div className="w-[calc(100%-30px)] flex flex-row gap-2 capitalize">
                          {selectedProposals
                            .slice(0, 1)
                            .map((proposal, index) => (
                              <div
                                key={index}
                                className="border-[#F2F2F2] border-[1px] gap-1 rounded-l-full rounded-r-full rounded-[10px] px-2 py-1 flex flex-row items-center justify-center"
                              >
                                <p className="text-[min(3vw,12px)] text-[#757575] font-medium">
                                  {proposal}
                                </p>
                                <div
                                  onClick={() =>
                                    setSelectedProposals(
                                      selectedProposals.filter(
                                        (item) => item !== proposal
                                      )
                                    )
                                  }
                                  className="size-[20px] bg-gray-200 rounded-full flex items-center justify-center"
                                >
                                  <IoClose className="text-[#2d2d2d] size-[14px]" />
                                </div>
                              </div>
                            ))}
                        </div>
                      ) : (
                        <p className="text-[min(3vw,12px)] text-[#757575] font-medium">
                          Select your proposal
                        </p>
                      )}
                    </div>
                    {showProposalDropDown && (
                      <div className="w-full h-fit p-4 absolute top-[50px] left-0 bg-white rounded-[10px] border-[#F2F2F2] border-[1px] z-[10] flex flex-wrap gap-2">
                        {proposalOptions.map((option, index) => (
                          <div
                            key={index}
                            onClick={() => handleProposalSelect(option)}
                            className="px-3 py-2 h-[30px] rounded-l-full border-[#F2F2F2] border-[1px] rounded-r-full flex items-center justify-center cursor-pointer hover:bg-gray-100"
                          >
                            <p className="text-[min(3vw,12px)] text-[#757575] font-medium">
                              {option}
                            </p>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Marketing Proposal Dropdown */}
              <div className="w-full flex flex-col items-center gap-7">
                <div className="w-full flex flex-row items-center justify-center gap-2">
                  <p className="text-[min(3vw,16px)] text-[#2d2d2] font-bold">
                    Marketing Proposal
                  </p>
                  <div className="w-[46px] h-[22px] p-1 bg-[#FFF8E2] rounded-l-full rounded-r-full items-center justify-center flex flex-row gap-1">
                    <img
                      src={pointIcon}
                      alt="Points icon"
                      className="size-[15px]"
                    />
                    <p className="text-[#AA7F00] text-[min(3vw,14px)] font-bold">
                      X 1
                    </p>
                  </div>
                </div>

                <div className="w-full max-w-[422px] flex flex-col gap-1">
                  <p className="text-[min(3vw,10px)] text-[#2D2D2D] font-medium">
                    Marketing Proposal
                  </p>
                  <div
                    ref={marketingProposalDropDownRef}
                    className="w-full h-[43px] rounded-r-full items-center relative flex flex-row gap-4 cursor-pointer rounded-l-full bg-white border-[#F2F2F2] border-[1px]"
                  >
                    <div
                      onClick={() =>
                        setShowMarketingDropDown(!showmarketingDropDown)
                      }
                      className="flex flex-row gap-4 p-2 items-center"
                    >
                      <div className="size-[25px] bg-gray-200 rounded-full overflow-hidden flex items-center justify-center">
                        <img
                          src={bagIcon}
                          alt="Key icon"
                          className="w-[12px] h-[12px]"
                        />
                      </div>
                      {selectedMarketing.length > 0 ? (
                        <div className="w-[calc(100%-30px)] flex flex-wrap gap-2 capitalize">
                          {selectedMarketing
                            .slice(0, 2)
                            .map((marketing, index) => (
                              <div
                                key={index}
                                className="border-[#F2F2F2] border-[1px] gap-1 rounded-l-full rounded-r-full rounded-[10px] px-2 py-1 flex flex-row items-center justify-center"
                              >
                                <p className="text-[min(3vw,12px)] text-[#757575] font-medium">
                                  {marketing}
                                </p>
                                <div
                                  onClick={() =>
                                    setSelectedMarketing(
                                      selectedMarketing.filter(
                                        (item) => item !== marketing
                                      )
                                    )
                                  }
                                  className="size-[20px] bg-gray-200 rounded-full flex items-center justify-center"
                                >
                                  <IoClose className="text-[#2d2d2d] size-[14px]" />
                                </div>
                              </div>
                            ))}
                        </div>
                      ) : (
                        <p className="text-[min(3vw,12px)] text-[#757575] font-medium">
                          Select your proposal
                        </p>
                      )}
                    </div>
                    {showmarketingDropDown && (
                      <div className="w-full h-fit p-4 absolute top-[50px] left-0 bg-white rounded-[10px] border-[#F2F2F2] border-[1px] z-[10] flex flex-wrap gap-4">
                        {marketingOptions.map((option, index) => (
                          <div key={index} className="flex flex-col gap-3">
                            <h2 className="text-[min(3vw,12px)] text-[#2d2d2d] font-bold">
                              {option.title}
                            </h2>
                            <div className="w-full flex flex-wrap gap-2">
                              {option.list.map((item, index) => (
                                <div
                                  key={index}
                                  onClick={() => handleMarketingSelect(item)}
                                  className="px-2 py-1 h-[30px] rounded-l-full border-[#F2F2F2] border-[1px] rounded-r-full flex items-center justify-center cursor-pointer hover:bg-gray-100"
                                >
                                  <p className="text-[min(3vw,12px)] text-[#757575] font-medium">
                                    {item}
                                  </p>
                                </div>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Service Fee Table */}
              <div className="w-full flex flex-col items-center gap-7">
                <div className="w-full flex flex-row items-center justify-center gap-2">
                  <p className="text-[min(3vw,16px)] text-[#2d2d2] font-bold">
                    Service Fee
                  </p>
                </div>

                <div className="w-full max-w-[422px] flex flex-col gap-1">
                  <div className="w-full grid grid-cols-3 rounded-[20px] border-[#F2F2F2] border-[1px] overflow-hidden">
                    <div className="w-full flex flex-col">
                      <div className="bg-white w-full h-[30px] flex items-center justify-center border-[#F2F2F2] border-[1px]">
                        <h2 className="text-[min(3vw,13px)] text-[#2d2d2d] font-bold">
                          Residential
                        </h2>
                      </div>
                      <div className="bg-white w-full h-[30px] flex items-center justify-center border-[#F2F2F2] border-[1px]">
                        <div className="grid grid-cols-2 w-full">
                          <div className="h-[30px] flex flex-row items-center justify-center w-full border-[#F2F2F2] border-[1px]">
                            <h2 className="text-[min(3vw,11px)] text-[#2d2d2d] ">
                              Rent
                            </h2>
                          </div>
                          <div className="h-[30px] flex flex-row items-center justify-center w-full border-[#F2F2F2] border-[1px]">
                            <h2 className="text-[min(3vw,11px)] text-[#2d2d2d] ">
                              Sales
                            </h2>
                          </div>
                        </div>
                      </div>
                      <div className="bg-white w-full h-[30px] flex items-center justify-center border-[#F2F2F2] border-[1px]">
                        <div className="grid grid-cols-2 w-full">
                          <div className="h-[30px] flex flex-row items-center justify-center w-full border-[#F2F2F2] border-[1px]">
                            <h2 className="text-[min(3vw,11px)] text-[#2d2d2d] ">
                              0.3
                            </h2>
                          </div>
                          <div className="h-[30px] flex flex-row items-center justify-center w-full border-[#F2F2F2] border-[1px]">
                            <h2 className="text-[min(3vw,11px)] text-[#2d2d2d] ">
                              1%
                            </h2>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="w-full flex flex-col">
                      <div className="bg-white w-full h-[30px] flex items-center justify-center border-[#F2F2F2] border-[1px]">
                        <h2 className="text-[min(3vw,13px)] text-[#2d2d2d] font-bold">
                          Commercial
                        </h2>
                      </div>
                      <div className="bg-white w-full h-[30px] flex items-center justify-center border-[#F2F2F2] border-[1px]">
                        <div className="grid grid-cols-2 w-full">
                          <div className="h-[30px] flex flex-row items-center justify-center w-full border-[#F2F2F2] border-[1px]">
                            <h2 className="text-[min(3vw,11px)] text-[#2d2d2d] ">
                              Lease
                            </h2>
                          </div>
                          <div className="h-[30px] flex flex-row items-center justify-center w-full border-[#F2F2F2] border-[1px]">
                            <h2 className="text-[min(3vw,11px)] text-[#2d2d2d] ">
                              Sales
                            </h2>
                          </div>
                        </div>
                      </div>
                      <div className="bg-white w-full h-[30px] flex items-center justify-center border-[#F2F2F2] border-[1px]">
                        <div className="grid grid-cols-2 w-full">
                          <div className="h-[30px] flex flex-row items-center justify-center w-full border-[#F2F2F2] border-[1px]">
                            <h2 className="text-[min(3vw,11px)] text-[#2d2d2d] ">
                              0.3
                            </h2>
                          </div>
                          <div className="h-[30px] flex flex-row items-center justify-center w-full border-[#F2F2F2] border-[1px]">
                            <h2 className="text-[min(3vw,11px)] text-[#2d2d2d] ">
                              1%
                            </h2>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="w-full flex flex-col">
                      <div className="bg-white w-full h-[30px] flex items-center justify-center border-[#F2F2F2] border-[1px]">
                        <h2 className="text-[min(3vw,13px)] text-[#2d2d2d] font-bold">
                          Business
                        </h2>
                      </div>
                      <div className="bg-white w-full h-[30px] flex items-center justify-center border-[#F2F2F2] border-[1px]">
                        <div className="grid grid-cols-1 w-full">
                          <div className="h-[30px] flex flex-row items-center justify-center w-full border-[#F2F2F2] border-[1px]">
                            <h2 className="text-[min(3vw,11px)] text-[#2d2d2d] ">
                              Sales
                            </h2>
                          </div>
                        </div>
                      </div>
                      <div className="bg-white w-full h-[30px] flex items-center justify-center border-[#F2F2F2] border-[1px]">
                        <div className="grid grid-cols-1 w-full">
                          <div className="h-[30px] flex flex-row items-center justify-center w-full border-[#F2F2F2] border-[1px]">
                            <h2 className="text-[min(3vw,11px)] text-[#2d2d2d] ">
                              1%
                            </h2>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-full flex flex-col items-center gap-7 py-7">
                <button
                  onClick={handleSubmit}
                  className="w-full max-w-[350px] flex flex-row gap-1 text-white text-[14px] font-bold items-center justify-center bg-[#68BA6B] h-[50px] rounded-l-full rounded-r-full"
                >
                  Create agent account
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default JoinAgentCard;
