import React from 'react';

const Banner = () => {
    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="bg-blue-600 text-white p-10 text-center rounded-lg shadow-lg">
                <h1 className="text-4xl font-bold">欢迎来到我们的网站</h1>
                <p className="mt-2 text-lg">探索更多精彩内容，享受美好体验</p>
                <button className="mt-4 bg-white text-blue-600 font-semibold py-2 px-4 rounded">立即开始</button>
            </div>
        </div>
    );
};

export default Banner;