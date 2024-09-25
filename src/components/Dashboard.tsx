import { Card } from "./Card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./Tabs";
import { useState } from "react";
import AssetPerformance from "./AssetPerformance";
import DataPreprocessing from "./DataPreprocessing";
import DataTransformation from "./DataTransformation";
import FeatureExtraction from "./FeatureExtraction";
import ConditionAssessment from "./ConditionAssessment";
import { FiPhone } from "react-icons/fi";
import { Callout } from "../common/Callout";
import { RiErrorWarningFill } from '@remixicon/react';
import { Badge } from "../common/Badge";
import { Button } from "./Button";
import { TabNavigation, TabNavigationLink } from "../common/TabNavigation";
import {
  RiBankCard2Line,
  RiCustomerService2Fill,
  RiExchange2Line,
  RiHome2Line,
} from "@remixicon/react"

const Dashboard = () => {

  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };

  return (
    <div>
      <div className="flex w-full h-full">
        <div className="flex flex-col gap-1 ml-2 mb-4 w-[40%]">
          <div className="flex gap-3 align-end items-end pt-1">
            <h3 className=" font-semibold  text-gray-900 dark:text-gray-50 text-3xl">
              Asset Name
            </h3>
            <Badge className="mb-1" variant="warning">Warning</Badge>
          </div>

          <div className="flex gap-10 mt-1">
            <p className=" flex justify-center items-center gap-2 text-slate-500 dark:text-slate-400">
              Location, Factory Name</p>
            <p className=" flex justify-center items-center gap-2 text-slate-500 dark:text-slate-400"><FiPhone />
              Mr. Chinmay</p>
          </div>
        </div>
        <div className="flex-col flex-grow justify-items-start ">
          <div className="mt-[-8px] mb-3 ">
            <Callout className="p-2" title="AWS Credit Alert" icon={RiErrorWarningFill}>
            </Callout>
          </div>
          <div>
            <div className="tab-list flex  gap-3 my-2">
              {["Asset Profile", "Trend Analysis", "Data Transfrom", "Feature Extraction", "Rule Based Alerts"].map((tab, index) => (
                <Button
                  variant={activeTab === index ? "ghost" : "ghost"}
                  key={index}
                  className={`tab-button ${activeTab === index ? "bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-700" : ""}`}
                  onClick={() => handleTabClick(index)}
                >
                  {tab}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Card className="flex-1 p-5 dark:bg-gray-800 ">
        <div className="w-full ">
          <div className="">
            <div className="tab-content">
              {activeTab === 0 && <div><AssetPerformance /></div>}
              {activeTab === 1 && <div><DataPreprocessing /></div>}
              {activeTab === 2 && <div><DataTransformation /></div>}
              {activeTab === 3 && <div><FeatureExtraction /></div>}
              {activeTab === 4 && <div><ConditionAssessment /></div>}
            </div>

            <div className="flex-grow">
              <div className="flex gap-5">
                <div className="mx-auto flex max-w-lg items-center justify-between px-4 ">
                  <div className="flex items-center space-x-2.5">
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div>

            </div>
            <div>

            </div>
          </div>


        </div>
      </Card>
    </div>

  );
};

export default Dashboard;
