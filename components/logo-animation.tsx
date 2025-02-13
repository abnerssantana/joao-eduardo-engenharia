import React from 'react';
import { motion } from 'framer-motion';

const AnimatedLogo = () => {
  const pathVariants = {
    hidden: { opacity: 0, pathLength: 0 },
    visible: (i: number) => ({
      opacity: 1,
      pathLength: 1,
      transition: {
        pathLength: {
          delay: i * 0.05,
          duration: 2,
          ease: "easeInOut"
        },
        opacity: {
          delay: i * 0.05,
          duration: 0.5
        }
      }
    })
  };

  const containerVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        delayChildren: 0.3,
        staggerChildren: 0.05
      }
    }
  };

  return (
    <div className="w-full h-full flex items-center justify-center">
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        xmlSpace="preserve"
        fillRule="evenodd"
        strokeLinejoin="round"
        strokeMiterlimit="2"
        clipRule="evenodd"
        viewBox="0 0 1920 1080"
        className="h-96"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* First section - Dark paths */}
        <motion.path
          fill="#201F1E"
          fillRule="nonzero"
          d="m822.958 302.64 68.518 39.559-68.516-39.56 68.517-39.561-.001-.002-68.518 39.56v79.122z"
          variants={pathVariants}
          custom={0}
        />
        <motion.path
          fill="#201F1E"
          fillRule="nonzero"
          d="M959.996 223.514v79.12h-.002l.002.003v-79.12l68.518 39.558-68.516-39.56 68.516-39.559v-.002l-68.516 39.558z"
          variants={pathVariants}
          custom={1}
        />
        <motion.path
          fill="#201F1E"
          fillRule="nonzero"
          d="M1028.52 263.078v79.12h-.002.002v-79.117l68.52 39.558-68.518-39.56 68.517-39.559v-.002l-68.517 39.558z"
          variants={pathVariants}
          custom={2}
        />
        <motion.path
          fill="#201F1E"
          fillRule="nonzero"
          d="M959.998 381.76 891.48 342.2l68.518-39.56v-.001l-68.52 39.56v79.122l.002-79.12z"
          variants={pathVariants}
          custom={3}
        />
        <motion.path
          fill="#201F1E"
          fillRule="nonzero"
          d="M1097.04 302.64v79.123l.002-79.12 68.516 39.558-68.516-39.56 68.517-39.559v-.002l-68.517 39.558z"
          variants={pathVariants}
          custom={4}
        />
        <motion.path
          fill="#201F1E"
          fillRule="nonzero"
          d="M1028.52 421.323l-68.518-39.56 68.52-39.559v-.002h-.002L960 381.76v79.123l.002-79.12z"
          variants={pathVariants}
          custom={5}
        />
        <motion.path
          fill="#201F1E"
          fillRule="nonzero"
          d="M1165.56 342.205h.004l68.515-39.561-68.517 39.558-.002.002z"
          variants={pathVariants}
          custom={6}
        />
        <motion.path
          fill="#201F1E"
          fillRule="nonzero"
          d="M1028.52 421.328l.002-.002 68.516-39.56v-.001l-68.518 39.56z"
          variants={pathVariants}
          custom={7}
        />
        <motion.path
          fill="#201F1E"
          fillRule="nonzero"
          d="M1302.6 342.207l-68.52 39.56v.001l-68.519 39.558v.004l-68.52 39.557v.002l-68.519 39.558v.002l-68.52 39.56v395.597l68.522-39.56v-.003l68.52-39.556v-.004l68.519-39.558v-.001l68.52-39.558v-.004l68.517-39.558v-79.119l-68.52 39.558v.002l-68.519 39.56v.001l-68.52 39.56v.002l-68.517 39.556v-79.118l68.52-39.56v-.001l68.519-39.558v-.004l68.52-39.557v-.004l68.517-39.556v-79.12l-68.52 39.559v.001l-68.519 39.56v.002l-68.52 39.558v.001l-68.517 39.558v-79.119l68.52-39.558v-.002l68.519-39.56v-.001l68.52-39.558v-.003l68.517-39.558z"
          variants={pathVariants}
          custom={8}
        />

        {/* Green paths */}
        <motion.path
          fill="#69883A"
          fillRule="nonzero"
          d="M891.476 263.075h.002v.002l68.517 39.556v-79.12l-.001-.001-68.518-39.558z"
          variants={pathVariants}
          custom={9}
        />
        <motion.path
          fill="#69883A"
          fillRule="nonzero"
          d="M754.438 342.196h.002l68.517 39.558v-79.12l-.001-.001-68.518-39.558-.002 79.12z"
          variants={pathVariants}
          custom={10}
        />
        <motion.path
          fill="#69883A"
          fillRule="nonzero"
          d="M959.997 302.638l68.52 39.558v-79.12l-.002-.001-68.518-39.558z"
          variants={pathVariants}
          custom={11}
        />
        <motion.path
          fill="#69883A"
          fillRule="nonzero"
          d="M891.477 342.198l-68.518-39.56-.001 79.12.001.001v.002h.002l68.518 39.558v-79.121z"
          variants={pathVariants}
          custom={12}
        />
        <motion.path
          fill="#69883A"
          fillRule="nonzero"
          d="M1028.52 342.201h.004v.002l68.515 39.556v-79.121l-68.519-39.558v79.12l.002.001z"
          variants={pathVariants}
          custom={13}
        />
        <motion.path
          fill="#69883A"
          fillRule="nonzero"
          d="M959.998 381.76l-68.518-39.558-.001 79.12h.001v.001l68.518 39.558z"
          variants={pathVariants}
          custom={14}
        />
        <motion.path
          fill="#69883A"
          fillRule="nonzero"
          d="m1097.04 381.763.002.002 68.516-39.56v-.003l-68.518-39.558-.002 79.12z"
          variants={pathVariants}
          custom={15}
        />
        <motion.path
          fill="#69883A"
          fillRule="nonzero"
          d="M1028.52 421.323l-68.518-39.56-.001 79.12.003.004 68.518-39.56v-.004z"
          variants={pathVariants}
          custom={16}
        />

        {/* Teal paths */}
        <motion.path
          fill="#7BA993"
          fillRule="nonzero"
          d="M1165.56 658.683v.004l-68.52 39.558v.002l-68.519 39.56v79.117l68.518-39.558 68.52-39.562 68.519-39.56 68.517-39.56-68.517-39.56v.002z"
          variants={pathVariants}
          custom={17}
        />
        <motion.path
          fill="#7BA993"
          fillRule="nonzero"
          d="M1165.56 500.444v.002l-68.52 39.56v.002l-68.519 39.557v79.12l68.518-39.56 68.52-39.56 68.519-39.561 68.517-39.56-68.517-39.561v.004z"
          variants={pathVariants}
          custom={18}
        />

        {/* Gray paths */}
        <motion.path
          fill="#605F5F"
          fillRule="nonzero"
          d="M1234.08 698.245v-.002l-68.518 39.562zM1165.56 737.806v-.002l-68.52 39.562zM1097.04 777.367v-.002l-68.518 39.56zM1234.08 540.007v-.002l-68.518 39.562zM1165.56 579.567v-.002l-68.52 39.56zM1097.04 619.128v-.002l-68.518 39.56z"
          variants={pathVariants}
          custom={19}
        />
        <motion.path
          fill="#605F5F"
          d="M959.994 302.634h.002v.002h-.002z"
          variants={pathVariants}
          custom={20}
        />
        <motion.path
          fill="#605F5F"
          fillRule="nonzero"
          d="M822.957 381.757v-.002l-.002.002zM1028.51 342.199h.002v-.002zM891.478 421.318h-.002l.002.002zM1097.04 381.762v-.002l-.002.002z"
          variants={pathVariants}
          custom={21}
        />
        <motion.path
          fill="#605F5F"
          fillRule="nonzero"
          d="M1234.08 381.768v-.002l-68.518 39.56zM1165.56 421.33v-.003l-68.52 39.56zM1097.04 460.89v-.003l-68.518 39.56zM1028.52 500.45v-.003L960 540.01z"
          variants={pathVariants}
          custom={22}
        />

        {/* Light gray paths */}
        <motion.path
          fill="#949392"
          fillRule="nonzero"
          d="m959.998 223.513 68.518-39.56-68.52-39.559-68.52 39.56 68.518 39.56zM891.478 263.075h-.002l.002.002z"
          variants={pathVariants}
          custom={23}
        />
        <motion.path
          fill="#949392"
          fillRule="nonzero"
          d="m891.477 263.075-.002-.002-68.517-39.56-68.518 39.562 68.518 39.56z"
          variants={pathVariants}
          custom={24}
        />
        <motion.path
          fill="#949392"
          fillRule="nonzero"
          d="M822.96 302.638l68.518 39.56v.001l68.519-39.561h-.002v-.002h-.002l.002-.002-68.517-39.557v.001z"
          variants={pathVariants}
          custom={25}
        />
        <motion.path
          fill="#949392"
          fillRule="nonzero"
          d="M754.439 342.198h-.002l.002-.002-.004-.002-68.515-39.56-68.52 39.562 68.518 39.561h.002z"
          variants={pathVariants}
          custom={26}
        />
        <motion.path
          fill="#949392"
          fillRule="nonzero"
          d="M822.96 381.76h-.002zl-.004-.004.002-.002-68.517-39.558v.002l-68.518 39.562 68.516 39.557.002.002h.001z"
          variants={pathVariants}
          custom={27}
        />
        <motion.path
          fill="#949392"
          fillRule="nonzero"
          d="M1028.51 263.075l.002.002.002-.002 68.515-39.56-68.517-39.559h-.002l-68.518 39.56z"
          variants={pathVariants}
          custom={28}
        />
        <motion.path
          fill="#949392"
          fillRule="nonzero"
          d="M1097.04 302.638h.002l68.516-39.56-68.518-39.559-68.518 39.56z"
          variants={pathVariants}
          custom={29}
        />
        <motion.path
          fill="#949392"
          fillRule="nonzero"
          d="M1165.56 342.202l.002.002.002-.002 68.517-39.56-68.52-39.56-68.519 39.56z"
          variants={pathVariants}
          custom={30}
        />
        <motion.path
          fill="#949392"
          fillRule="nonzero"
          d="M960.002 460.886H960l.002-.002h-.004l-.002-.002h.002l-68.517-39.56v.002l-68.518 39.56 68.518 39.56v.001h.002z"
          variants={pathVariants}
          custom={31}
        />

        {/* Additional paths */}
        <motion.path
          fill="#516E5E"
          fillRule="nonzero"
          d="m685.923 698.235 68.521-39.56v-.002l68.52-39.557v-.004l68.512-39.554-68.51-39.552v-.002l-.002-.002V540l-68.52-39.557v-.002l-.002-.002v-.002l-68.519 39.56z"
          variants={pathVariants}
          custom={32}
        />
        <motion.path
          fill="#201F1E"
          d="M822.962 381.756h.002v.002h-.002z"
          variants={pathVariants}
          custom={33}
        />
        <motion.path
          fill="#201F1E"
          fillRule="nonzero"
          d="M891.484 421.322v-.002l-.002.002z"
          variants={pathVariants}
          custom={34}
        />
        <motion.path
          fill="#201F1E"
          fillRule="nonzero"
          d="M1097.04 381.763h.002l68.516-39.561v-.002l-68.518 39.56z"
          variants={pathVariants}
          custom={35}
        />
        <motion.path
          fill="#201F1E"
          d="M960.004 460.882h.002v.002h-.002z"
          variants={pathVariants}
          custom={36}
        />
        <motion.path
          fill="#201F1E"
          fillRule="nonzero"
          d="M822.965 381.763v-.002l-68.52 39.558-.001.002v79.117l.002-79.114 68.517 39.558-68.516-39.56z"
          variants={pathVariants}
          custom={37}
        />
        <motion.path
          fill="#201F1E"
          fillRule="nonzero"
          d="M891.485 421.325v-.002l-68.518 39.56v79.119-79.116l68.518 39.558-68.518-39.56z"
          variants={pathVariants}
          custom={38}
        />
        <motion.path
          fill="#201F1E"
          fillRule="nonzero"
          d="M960.006 460.887v-.002l-68.518 39.56h-.001v79.12l.001-79.116 68.518 39.56-68.518-39.56z"
          variants={pathVariants}
          custom={39}
        />
        <motion.path
          fill="#7BA993"
          fillRule="nonzero"
          d="m754.439 500.436-68.518-39.556v-.006l-68.517 39.562 68.517 39.558v.001z"
          variants={pathVariants}
          custom={40}
        />
        <motion.path
          fill="#605F5F"
          fillRule="nonzero"
          d="M685.923 777.354v-237.36l-68.518-39.557-.001 79.119h.001l-.001 79.12h.001l-.001 79.118z"
          variants={pathVariants}
          custom={41}
        />
        <motion.path
          fill="#605F5F"
          fillRule="nonzero"
          d="M754.443 737.797l-68.518-39.558-.001 79.12 68.519 39.559z"
          variants={pathVariants}
          custom={42}
        />
        <motion.path
          fill="#605F5F"
          fillRule="nonzero"
          d="M822.965 777.36l-3.973-2.295-64.546-37.263-.002 79.12 68.521 39.559z"
          variants={pathVariants}
          custom={43}
        />
        <motion.path
          fill="#605F5F"
          fillRule="nonzero"
          d="M960.007 935.605V540.008l-68.52-39.558v79.115-79.119l-.001-.002-68.52-39.557v79.115-79.119h-.002v-.002l-68.517-39.558-.002 79.116v-79.12l-.002-.001-68.518-39.558-.001 79.116v-79.118l-.002-.003-68.518-39.556v79.119l68.518 39.558.002.001v.004l68.515 39.556-68.515 39.56 68.52-39.56v.006L822.965 540v.002l.002.002v.002l68.508 39.552h.002l.008.006v79.117h.002v34.829l.002 44.298v79.117l-.002-.002-68.52-39.558v79.12l68.522 39.557V816.93v79.117z"
          variants={pathVariants}
          custom={44}
        />
        <motion.path
          fill="#605F5F"
          fillRule="nonzero"
          d="M1234.08 381.768v-.002l-68.518 39.56zM1165.56 421.328v-.002l-68.518 39.562zM1097.05 460.89v-.003l-68.52 39.562zM1028.53 500.45v-.002l-68.518 39.562z"
          variants={pathVariants}
          custom={45}
        />
        <motion.path
          fill="#949392"
          fillRule="nonzero"
          d="M948.275 459.894h-.002zm-.002-.004h-.002l.002-.001zm148.76-78.134-68.518 39.56-.003-.004-68.518 39.56-.002-.002v-.002h-.002l-68.515-39.56h-.002v.002l-.002-.002-68.516-39.557h-.002l-68.517-39.56h-.002l-68.518 39.562 68.518 39.557.002.002h.002l68.519-39.56v.002l-68.52 39.56 68.516 39.56h.002l.002.001.002-.001 68.517-39.558v.002l-68.517 39.56 68.516 39.559h.003l68.52-39.558v.002l-68.518 39.56L959.996 540h.002l68.52-39.56 68.517-39.562 68.521-39.56 68.518-39.559.002-.002 68.517-39.56-68.52-39.559-68.515 39.558-.006-.002-68.52 39.56z"
          variants={pathVariants}
          custom={46}
        />
        <motion.path
          fill="#7BA993"
          fillRule="nonzero"
          d="m754.444 658.676-68.518 39.561 68.518 39.56v.002h.004l-.002.001 60.281 34.803 4.265 2.462 3.973 2.295.004.002h-.002l68.518 39.56.002.001v-79.115l-.002-44.3v-34.827l-.002-.002v-79.117l-.006-.004-68.514 39.558z"
          variants={pathVariants}
          custom={47}
        />
        <motion.path
          fill="#949392"
          fillRule="nonzero"
          d="m617.404 342.197 342.592-197.803L1302.594 342.2 959.998 540.001z"
          variants={pathVariants}
          custom={48}
        />
      </motion.svg>
    </div>
  );
};

export default AnimatedLogo;