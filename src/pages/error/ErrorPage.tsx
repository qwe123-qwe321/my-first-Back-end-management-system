import React from 'react';
import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useAppStore } from '../../store/appStore';

interface ErrorPageProps {
  code: string;
  message: string;
}

const ErrorPage: React.FC<ErrorPageProps> = ({ code, message }) => {
  const isDark = useAppStore((state) => state.isDark);
  const navigate = useNavigate();

  const goHome = () => {
    navigate('/dashboard');
  };

  return (
    <div className="p-8">
      <div className="max-w-2xl mx-auto text-center">
        <div className="relative w-full h-72 mx-auto mb-8">
          {code === '403' && (
            <>
              <div className="absolute top-5 right-20 w-16 h-16 rounded-full bg-purple-600 flex items-center justify-center text-white text-3xl font-bold z-10">
                🔒
              </div>
              <div className="relative w-full h-full">
                <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-52 h-52 rounded-full ${isDark ? 'bg-gray-800' : 'bg-blue-50'} z-1`}></div>
                <div className="absolute top-10 left-16 w-5 h-5 rounded-full bg-white/60"></div>
                <div className="absolute bottom-10 right-16 w-8 h-8 rounded-full bg-white/60"></div>
                <div className="absolute top-20 right-10 w-10 h-10 rounded-full bg-white/60"></div>

                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-5">
                  <div className="w-12 h-12 rounded-full bg-amber-200 mx-auto mb-3"></div>
                  <div className="w-16 h-20 bg-white rounded-t-full mx-auto relative">
                    <div className="absolute top-5 left-[-10px] w-32 h-5">
                      <div className="absolute left-0 w-10 h-5 bg-white rounded-full transform -rotate-45 origin-right"></div>
                      <div className="absolute right-0 w-10 h-5 bg-white rounded-full transform rotate-45 origin-left"></div>
                    </div>
                  </div>
                  <div className="w-16 h-20 mx-auto relative">
                    <div className="absolute left-2 w-5 h-20 bg-blue-500 rounded-full"></div>
                    <div className="absolute right-2 w-5 h-20 bg-blue-500 rounded-full"></div>
                  </div>
                </div>

                <div className="absolute bottom-8 right-16 z-3">
                  <div className="w-8 h-16 bg-green-500 rounded-full relative">
                    <div className="absolute top-3 left-[-5px] w-5 h-5 bg-green-500 rounded-full"></div>
                    <div className="absolute top-8 right-[-5px] w-5 h-5 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="w-10 h-8 bg-amber-100 rounded-b-full mx-auto mt-1"></div>
                </div>
              </div>
            </>
          )}

          {code === '404' && (
            <>
              <div className="absolute top-5 right-20 w-16 h-16 rounded-full bg-blue-500 flex items-center justify-center text-white text-3xl font-bold z-10">
                ?
              </div>
              <div className="relative w-full h-full">
                <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-52 h-52 rounded-full ${isDark ? 'bg-gray-800' : 'bg-blue-50'} z-1`}></div>
                <div className="absolute top-10 left-16 w-5 h-5 rounded-full bg-white/60"></div>
                <div className="absolute bottom-10 right-16 w-8 h-8 rounded-full bg-white/60"></div>
                <div className="absolute top-20 right-10 w-10 h-10 rounded-full bg-white/60"></div>

                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-5">
                  <div className="w-12 h-12 rounded-full bg-amber-200 mx-auto mb-3"></div>
                  <div className="w-16 h-20 bg-white rounded-t-full mx-auto relative">
                    <div className="absolute top-5 left-[-10px] w-32 h-5">
                      <div className="absolute left-0 w-10 h-5 bg-white rounded-full transform -rotate-30 origin-right"></div>
                      <div className="absolute right-0 w-10 h-5 bg-white rounded-full transform rotate-30 origin-left"></div>
                    </div>
                  </div>
                  <div className="w-16 h-20 mx-auto relative">
                    <div className="absolute left-2 w-5 h-20 bg-blue-500 rounded-full"></div>
                    <div className="absolute right-2 w-5 h-20 bg-blue-500 rounded-full"></div>
                  </div>
                </div>

                <div className="absolute top-32 left-36 w-16 h-10 bg-white border-2 border-gray-200 z-4">
                  <div className={`absolute top-[-8px] left-1/2 transform -translate-x-1/2 w-10 h-3 ${isDark ? 'bg-gray-700' : 'bg-gray-200'} rounded-t`}></div>
                </div>

                <div className="absolute bottom-8 right-16 z-3">
                  <div className="w-8 h-16 bg-green-500 rounded-full relative">
                    <div className="absolute top-3 left-[-5px] w-5 h-5 bg-green-500 rounded-full"></div>
                    <div className="absolute top-8 right-[-5px] w-5 h-5 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="w-10 h-8 bg-amber-100 rounded-b-full mx-auto mt-1"></div>
                </div>
              </div>
            </>
          )}

          {code === '500' && (
            <>
              <div className="absolute top-5 right-20 w-16 h-16 rounded-full bg-red-500 flex items-center justify-center text-white text-3xl font-bold z-10">
                !
              </div>
              <div className="relative w-full h-full">
                <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-52 h-52 rounded-full ${isDark ? 'bg-gray-800' : 'bg-blue-50'} z-1`}></div>
                <div className="absolute top-10 left-16 w-5 h-5 rounded-full bg-white/60"></div>
                <div className="absolute bottom-10 right-16 w-8 h-8 rounded-full bg-white/60"></div>
                <div className="absolute top-20 right-10 w-10 h-10 rounded-full bg-white/60"></div>

                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-5">
                  <div className="w-12 h-12 rounded-full bg-amber-200 mx-auto mb-3"></div>
                  <div className="w-16 h-20 bg-white rounded-t-full mx-auto relative">
                    <div className="absolute top-5 left-[-10px] w-32 h-5">
                      <div className="absolute left-0 w-10 h-5 bg-white rounded-full transform rotate-45 origin-right top-[-2px]"></div>
                      <div className="absolute right-0 w-10 h-5 bg-white rounded-full transform -rotate-45 origin-left top-[2px]"></div>
                    </div>
                  </div>
                  <div className="w-16 h-20 mx-auto relative">
                    <div className="absolute left-2 w-5 h-20 bg-blue-500 rounded-full"></div>
                    <div className="absolute right-2 w-5 h-20 bg-blue-500 rounded-full"></div>
                  </div>
                </div>

                <div className="absolute top-32 right-20 z-4">
                  <div className={`w-20 h-24 bg-gray-200 rounded z-4`}>
                    <div className={`w-16 h-4 ${isDark ? 'bg-gray-600' : 'bg-gray-400'} mx-auto mt-5 rounded`}></div>
                    <div className={`w-16 h-4 ${isDark ? 'bg-gray-600' : 'bg-gray-400'} mx-auto mt-4 rounded`}></div>
                  </div>
                  <div className={`w-24 h-3 ${isDark ? 'bg-gray-600' : 'bg-gray-400'} mx-auto mt-1 rounded`}></div>
                </div>

                <div className="absolute bottom-8 right-40 z-3 transform scale-75">
                  <div className="w-8 h-16 bg-green-500 rounded-full relative">
                    <div className="absolute top-3 left-[-5px] w-5 h-5 bg-green-500 rounded-full"></div>
                    <div className="absolute top-8 right-[-5px] w-5 h-5 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="w-10 h-8 bg-amber-100 rounded-b-full mx-auto mt-1"></div>
                </div>
              </div>
            </>
          )}
        </div>

        <h1 className={`text-5xl font-bold mb-3 ${isDark ? 'text-white' : 'text-gray-800'}`}>{code}</h1>
        <p className={`text-lg mb-8 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{message}</p>
        <Button type="primary" onClick={goHome} className="text-base px-6 py-2">
          <span className="mr-2">←</span> 返回首页
        </Button>
      </div>
    </div>
  );
};

export default ErrorPage;