"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function Services() {
  const [activeTab, setActiveTab] = useState("Facebook");

  const row1 = [
    { name: "Facebook", icon: "/images/fb.png" },
    { name: "Instagram", icon: "/images/instagram.png" },
    { name: "X (Twitter)", icon: "/images/twitter.png" },
    { name: "YouTube", icon: "/images/youtube.png" },
    { name: "TikTok", icon: "/images/tik_tok.png" },
    { name: "LinkedIn", icon: "/images/linkedin.png" },
  ];

  const row2 = [
    { name: "Telegram", icon: "/images/telegram.png" },
    { name: "Discord", icon: "/images/discord.png" },
    { name: "Spotify", icon: "/images/spotify.png" },
    { name: "SoundCloud", icon: "/images/sound-cloud.png" },
    { name: "Snapchat", icon: "/images/snapchat.png" },
    { name: "Website Traffic", icon: "/images/network.png" },
  ];

  const serviceData = {
    Facebook: {
      title: "Facebook Marketing Services",
      desc: "Boost your brand visibility, connect with your ideal audience, and drive more traffic, engagement, and sales through strategic Facebook marketing campaigns.",
      icon3d: "/images/fb_3d.png",
      features: [
        { num: "01", title: "Facebook Post Likes-", desc: "Boost post engagement and credibility with real likes." },
        { num: "02", title: "Facebook Likes-", desc: "Grow your page popularity with high-quality likes." },
        { num: "03", title: "Facebook Comments-", desc: "Increase interaction with engaging comments." },
        { num: "04", title: "Facebook Shares-", desc: "Expand your reach with powerful shares." },
        { num: "05", title: "Facebook Video Views-", desc: "Get more visibility with high-retention video views." },
        { num: "06", title: "Facebook Reactions-", desc: "Make your posts more engaging with diverse reactions.." },
      ],
    },
    Instagram: {
      title: "Instagram Marketing Services",
      desc: "Grow your Instagram presence with targeted followers, likes, comments, and views to boost brand visibility and engagement.",
      icon3d: "/images/instagram.png",
      features: [
        { num: "01", title: "Instagram Followers-", desc: "Grow your follower count with real, active users." },
        { num: "02", title: "Instagram Likes-", desc: "Boost your post engagement with genuine likes." },
        { num: "03", title: "Instagram Comments-", desc: "Increase interaction with authentic comments." },
        { num: "04", title: "Instagram Views-", desc: "Get more visibility on your reels and stories." },
        { num: "05", title: "Instagram Story Views-", desc: "Boost your story reach with high-quality views." },
        { num: "06", title: "Instagram Saves-", desc: "Increase saves to boost algorithmic reach." },
      ],
    },
    "X (Twitter)": {
      title: "X (Twitter) Marketing Services",
      desc: "Amplify your Twitter presence with followers, retweets, and likes to increase reach and engagement on your tweets.",
      icon3d: "/images/twitter.png",
      features: [
        { num: "01", title: "Twitter Followers-", desc: "Grow your audience with real Twitter followers." },
        { num: "02", title: "Twitter Likes-", desc: "Boost tweet engagement with quality likes." },
        { num: "03", title: "Twitter Retweets-", desc: "Expand your reach with genuine retweets." },
        { num: "04", title: "Twitter Views-", desc: "Increase tweet impressions and visibility." },
        { num: "05", title: "Twitter Comments-", desc: "Drive conversation with authentic comments." },
        { num: "06", title: "Twitter Bookmarks-", desc: "Boost content saves for better algorithmic reach." },
      ],
    },
    YouTube: {
      title: "YouTube Marketing Services",
      desc: "Grow your YouTube channel with real subscribers, views, and engagement to dominate the algorithm and reach more viewers.",
      icon3d: "/images/youtube.png",
      features: [
        { num: "01", title: "YouTube Subscribers-", desc: "Grow your channel with real subscribers." },
        { num: "02", title: "YouTube Views-", desc: "Boost video views with high-retention traffic." },
        { num: "03", title: "YouTube Likes-", desc: "Increase likes to improve video ranking." },
        { num: "04", title: "YouTube Comments-", desc: "Get authentic comments to boost engagement." },
        { num: "05", title: "YouTube Watch Hours-", desc: "Meet monetization requirements faster." },
        { num: "06", title: "YouTube Shares-", desc: "Expand reach with quality video shares." },
      ],
    },
    TikTok: {
      title: "TikTok Marketing Services",
      desc: "Supercharge your TikTok growth with followers, views, and likes to go viral and dominate trending content.",
      icon3d: "/images/tik_tok.png",
      features: [
        { num: "01", title: "TikTok Followers-", desc: "Grow your TikTok following with real users." },
        { num: "02", title: "TikTok Views-", desc: "Boost video views to hit the For You page." },
        { num: "03", title: "TikTok Likes-", desc: "Increase likes for better content ranking." },
        { num: "04", title: "TikTok Comments-", desc: "Drive engagement with authentic comments." },
        { num: "05", title: "TikTok Shares-", desc: "Expand your video's viral potential." },
        { num: "06", title: "TikTok Live Views-", desc: "Get more viewers on your live streams." },
      ],
    },
    LinkedIn: {
      title: "LinkedIn Marketing Services",
      desc: "Strengthen your professional presence on LinkedIn with targeted followers, connections, and engagement strategies.",
      icon3d: "/images/linkedin.png",
      features: [
        { num: "01", title: "LinkedIn Followers-", desc: "Build your professional network with real followers." },
        { num: "02", title: "LinkedIn Connections-", desc: "Expand your 1st-degree connections." },
        { num: "03", title: "LinkedIn Post Likes-", desc: "Boost post credibility with genuine likes." },
        { num: "04", title: "LinkedIn Comments-", desc: "Drive professional conversation and visibility." },
        { num: "05", title: "LinkedIn Impressions-", desc: "Increase post reach within your network." },
        { num: "06", title: "LinkedIn Profile Views-", desc: "Boost your profile visibility and recruiter interest." },
      ],
    },
    Telegram: {
      title: "Telegram Marketing Services",
      desc: "Grow your Telegram community with real members, views, and engagement to build an active and loyal audience.",
      icon3d: "/images/telegram.png",
      features: [
        { num: "01", title: "Telegram Members-", desc: "Add real members to your channel or group." },
        { num: "02", title: "Telegram Views-", desc: "Boost post views for better channel visibility." },
        { num: "03", title: "Telegram Reactions-", desc: "Increase reactions on your messages." },
        { num: "04", title: "Telegram Shares-", desc: "Expand reach with genuine content shares." },
        { num: "05", title: "Telegram Comments-", desc: "Drive engagement with authentic comments." },
        { num: "06", title: "Telegram Votes-", desc: "Boost poll participation in your channel." },
      ],
    },
    Discord: {
      title: "Discord Marketing Services",
      desc: "Grow your Discord server with real members and online presence to build a thriving and active community.",
      icon3d: "/images/discord.png",
      features: [
        { num: "01", title: "Discord Members-", desc: "Add real members to your Discord server." },
        { num: "02", title: "Discord Online Members-", desc: "Boost online presence in your server." },
        { num: "03", title: "Discord Boosts-", desc: "Level up your server with genuine boosts." },
        { num: "04", title: "Discord Reactions-", desc: "Increase message reactions for engagement." },
        { num: "05", title: "Discord Followers-", desc: "Grow your server's announcement followers." },
        { num: "06", title: "Discord Invites-", desc: "Generate real invite links and traffic." },
      ],
    },
    Spotify: {
      title: "Spotify Marketing Services",
      desc: "Grow your Spotify presence with real streams, followers, and playlist placements to reach a wider audience.",
      icon3d: "/images/spotify.png",
      features: [
        { num: "01", title: "Spotify Streams-", desc: "Boost your track streams with real listeners." },
        { num: "02", title: "Spotify Followers-", desc: "Grow your artist or playlist followers." },
        { num: "03", title: "Spotify Saves-", desc: "Increase saves to improve algorithmic reach." },
        { num: "04", title: "Spotify Plays-", desc: "Get more plays on your podcast or album." },
        { num: "05", title: "Spotify Monthly Listeners-", desc: "Boost your monthly listener count." },
        { num: "06", title: "Spotify Playlist Followers-", desc: "Grow followers on your curated playlist." },
      ],
    },
    SoundCloud: {
      title: "SoundCloud Marketing Services",
      desc: "Grow your SoundCloud profile with real plays, followers, and reposts to build your music career faster.",
      icon3d: "/images/sound-cloud.png",
      features: [
        { num: "01", title: "SoundCloud Plays-", desc: "Boost track plays with genuine listeners." },
        { num: "02", title: "SoundCloud Followers-", desc: "Grow your SoundCloud following organically." },
        { num: "03", title: "SoundCloud Likes-", desc: "Increase likes on your tracks." },
        { num: "04", title: "SoundCloud Reposts-", desc: "Expand reach with authentic reposts." },
        { num: "05", title: "SoundCloud Comments-", desc: "Drive engagement with real comments." },
        { num: "06", title: "SoundCloud Downloads-", desc: "Boost track downloads and visibility." },
      ],
    },
    Snapchat: {
      title: "Snapchat Marketing Services",
      desc: "Grow your Snapchat presence with followers, views, and engagement strategies tailored for your audience.",
      icon3d: "/images/snapchat.png",
      features: [
        { num: "01", title: "Snapchat Followers-", desc: "Grow your Snapchat following with real users." },
        { num: "02", title: "Snapchat Views-", desc: "Increase story and spotlight views." },
        { num: "03", title: "Snapchat Score-", desc: "Boost your Snapchat score quickly." },
        { num: "04", title: "Snapchat Story Views-", desc: "Get more eyes on your daily stories." },
        { num: "05", title: "Snapchat Shares-", desc: "Expand content reach with genuine shares." },
        { num: "06", title: "Snapchat Subscribers-", desc: "Grow your public profile subscribers." },
      ],
    },
    "Website Traffic": {
      title: "Website Traffic Services",
      desc: "Drive real, targeted traffic to your website to increase visibility, improve SEO rankings, and boost conversions.",
      icon3d: "/images/network.png",
      features: [
        { num: "01", title: "Organic Traffic-", desc: "Drive real visitors from search engines." },
        { num: "02", title: "Social Traffic-", desc: "Bring targeted traffic from social platforms." },
        { num: "03", title: "Direct Traffic-", desc: "Increase direct URL visits to your site." },
        { num: "04", title: "Referral Traffic-", desc: "Get quality traffic from referral sources." },
        { num: "05", title: "Bounce Rate Reduction-", desc: "Improve engagement and reduce bounce rate." },
        { num: "06", title: "SEO Boost Traffic-", desc: "Strengthen your SEO with consistent traffic." },
      ],
    },
  };

  const current = serviceData[activeTab] || serviceData["Facebook"];
  // Only Facebook tab uses the big 3D fb_3d.png; others use their tab icon
  const show3dFbLogo = activeTab === "Facebook";

  return (
    <section
      id="services"
      className="w-full bg-[#FFFDF7] pt-10 sm:pt-16 pb-16 sm:pb-24 px-4 sm:px-8 lg:px-12 xl:px-16 max-w-[1920px] mx-auto"
    >
      {/* Section Header */}
      <div className="flex flex-col items-center text-center space-y-2 mb-8 sm:mb-12">
        <div className="flex flex-col items-center">
          <span className="text-[#FF6B00] font-bold text-xs sm:text-sm tracking-wider uppercase border-b-2 border-[#FF6B00] pb-0.5">
            our services
          </span>
          <div className="w-1.5 h-1.5 rounded-full bg-[#FF6B00] mt-0.5"></div>
        </div>
        <h2 className="font-parkinsans font-extrabold text-2xl sm:text-4xl lg:text-5xl text-[#1C1917] pt-2">
          Powerful <span className="text-[#FF6B00]">SMM Services</span> for Fast Growth
        </h2>
        <p className="text-[#666666] text-xs sm:text-base max-w-3xl leading-relaxed">
          Explore our comprehensive range of social media marketing services designed to help you grow your presence across all major platforms. From Facebook to TikTok, we&apos;ve got you covered.
        </p>
      </div>

      {/* Tabs Grid */}
      <div className="flex flex-col space-y-3 mb-10 max-w-6xl mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {row1.map((tab) => {
            const isActive = activeTab === tab.name;
            return (
              <motion.button
                key={tab.name}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setActiveTab(tab.name)}
                className={`flex items-center justify-center space-x-2.5 py-3 px-4 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  isActive
                    ? "bg-linear-to-r from-[#FF9243] via-[#DD6017] to-[#983200] text-white shadow-md"
                    : "bg-[#F7F2E8] hover:bg-[#EFE7D8] text-[#292524] border border-[#EFE7D8]"
                }`}
              >
                <span className="w-9.5 h-9.5 rounded-full bg-white flex items-center justify-center p-1  shrink-0 shadow-xs">
                  <Image src={tab.icon} alt={tab.name} width={38} height={38} className="w-full h-full object-contain" />
                </span>
                <span className="truncate">{tab.name}</span>
              </motion.button>
            );
          })}
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {row2.map((tab) => {
            const isActive = activeTab === tab.name;
            return (
              <motion.button
                key={tab.name}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setActiveTab(tab.name)}
                className={`flex items-center justify-center space-x-2.5 py-3 px-4 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  isActive
                    ? "bg-linear-to-r from-[#FF9243] via-[#DD6017] to-[#983200] text-white shadow-md"
                    : "bg-[#F7F2E8] hover:bg-[#EFE7D8] text-[#292524] border border-[#EFE7D8]"
                }`}
              >
                <span className="w-9.5 h-9.5 rounded-full bg-white flex items-center justify-center p-1 shrink-0 shadow-xs">
                  <Image src={tab.icon} alt={tab.name} width={38} height={38} className="w-full h-full object-contain" />
                </span>
                <span className="truncate">{tab.name}</span>
              </motion.button>
            );
          })}
        </div>
      </div>

      {/*
        ─────────────────────────────────────────────────────────────
        Main Card + Floating 3D FB Logo
        The wrapper uses overflow-visible so the 3D logo can stick out
        below/left of the card boundary.
        ─────────────────────────────────────────────────────────────
      */}
      <div className="relative max-w-6xl mx-auto" style={{ paddingBottom: "50px" }}>

        {/* ── Floating 3D Facebook Logo ──
            Sits at the bottom-left of the card, overflowing left and slightly down.
            z-index 30 so it renders on top of everything. */}
        {show3dFbLogo && (
          <div
            className="hidden lg:block absolute z-30 pointer-events-none"
            style={{
              bottom: "90px",
              left: "-90px",
              width: "150px",
              height: "150px",
            }}
          >
            <Image
              src="/images/fb_3d.png"
              alt="3D Facebook Icon"
              width={150}
              height={150}
              className="w-full h-full object-contain drop-shadow-2xl"
              priority
            />
          </div>
        )}

        {/* ── Main Card ── */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 lg:p-12 border-2 border-[#FFBA8A] shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">

          {/* Left: Service visual (faq.png — rocket + arrows) */}
          <div className="lg:col-span-5 relative w-full rounded-2xl"
            style={{ background: "linear-linear(160deg, #FFF5EC 0%, #FFDFC2 100%)" }}
          >
            <Image
              src="/images/faq.png"
              alt="Social Media Marketing Rocket Graphic"
              width={500}
              height={500}
              className="w-full h-full object-center"
              
            />
          </div>

          {/* Right: Details */}
          <div className="lg:col-span-7 flex flex-col space-y-4 sm:space-y-5">
            <h3 className="font-parkinsans font-bold text-xl sm:text-3xl text-[#FF6B00]">
              {current.title}
            </h3>
            <p className="text-[#666666] text-xs sm:text-sm leading-relaxed">
              {current.desc}
            </p>

            {/* Feature List */}
            <div className="space-y-2">
              {current.features.map((item) => (
                <div key={item.num} className="flex items-center space-x-3">
                  <span className=" shrink-0 w-10 h-10 rounded-r-2xl rounded-l-2xl bg-[#FF6B00] text-white font-bold text-xs flex items-center justify-center mt-0.5 shadow-xs">
                    {item.num}
                  </span>
                  <div className="text-xs sm:text-sm leading-snug">
                    <span className="font-bold text-[#FF6B00]">{item.title} </span>
                    <span className="text-[#666666]">{item.desc}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="pt-3 flex">
              <button className="px-7 py-3 rounded-xl bg-linear-to-r from-[#FF9243] via-[#DD6017] to-[#983200] hover:opacity-95 text-white font-semibold text-xs sm:text-sm shadow-sm transition-all">
                View {activeTab} Services
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
