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
        viewBox="0 0 1021 1179"
        className="h-52 lg:h-60 lg:mt-4 sm:h-52"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Dark paths - #201F1E */}
        <motion.path
          fill="#201F1E"
          fillRule="nonzero"
          d="m306.08 235.632 102.025 58.905-102.022-58.905 102.025-58.909-.003-.002-102.024 58.905v117.816zM510.134 117.812v117.813h-.003l.003.003v-117.81l102.024 58.902-102.022-58.906L612.158 58.91v-.003L510.136 117.81zM612.163 176.724v117.813h-.003.003V176.729l102.027 58.903-102.025-58.906 102.025-58.905v-.003l-102.025 58.903zM510.136 353.445l-102.024-58.906 102.024-58.905v-.003L408.11 294.536v117.817l.003-117.811zM714.192 235.633v117.816l.002-117.81 102.022 58.902-102.022-58.906L816.22 176.73v-.003L714.194 235.63zM612.165 412.357 510.141 353.45l102.027-58.905v-.003h-.003l-102.027 58.903v117.816l.003-117.81zM816.22 294.548h.006l102.022-58.909-102.024 58.903-.003.003zM612.168 412.363l.003-.002 102.022-58.906v-.003l-102.025 58.906zM1020.282 294.55l-102.028 58.906v.002l-102.027 58.903v.006L714.2 471.269v.003l-102.028 58.902v.003l-102.027 58.905v589.056l102.03-58.905v-.005l102.027-58.9v-.006l102.028-58.902v-.003l102.027-58.903v-.005l102.025-58.903v-117.81l-102.028 58.902v.003l-102.027 58.905v.003L714.2 942.514v.003l-102.025 58.9V883.609l102.027-58.905v-.003l102.028-58.903v-.005l102.027-58.903v-.005l102.025-58.9v-117.81l-102.028 58.902v.003l-102.027 58.905v.003L714.2 706.89v.003l-102.025 58.903V647.985l102.027-58.903v-.002l102.028-58.906v-.002l102.027-58.903v-.005l102.025-58.903z"
          variants={pathVariants}
          custom={0}
        />
        <motion.path
          fill="#201F1E"
          fillRule="nonzero"
          d="m204.06 883.593-102.025-58.905L204.06 765.78l102.027-58.906 102.019-58.902h-.003l-102.016 58.897v.005L204.06 765.777v.003l-102.028 58.905v117.81l.003-117.805zM300.174 939.089l-6.347-3.664-89.76-51.825.002-.003h-.008v117.81l.002-117.804zM408.12 1001.414l-102.025-58.906.002-.002h-.002v117.81-117.805z"
          variants={pathVariants}
          custom={1}
        />
        <motion.path
          fill="#201F1E"
          d="M306.087 353.44h.003v.002h-.003z"
          variants={pathVariants}
          custom={2}
        />
        <motion.path
          fill="#201F1E"
          fillRule="nonzero"
          d="M408.118 412.354v-.003l-.003.003zM714.2 353.45h.002l102.022-58.908v-.003L714.2 353.445z"
          variants={pathVariants}
          custom={3}
        />
        <motion.path
          fill="#201F1E"
          d="M510.146 471.26h.002v.003h-.002z"
          variants={pathVariants}
          custom={4}
        />
        <motion.path
          fill="#201F1E"
          fillRule="nonzero"
          d="M306.091 353.45v-.003l-102.027 58.902-.003.003V530.16l.003-117.802 102.025 58.902-102.022-58.905zM408.12 412.359v-.003l-102.025 58.905v117.811-117.805l102.024 58.902-102.024-58.905zM510.15 471.27v-.004l-102.025 58.906h-.003v117.813l.003-117.808 102.025 58.906-102.025-58.906z"
          variants={pathVariants}
          custom={5}
        />

        {/* Teal paths - #7BA993 */}
        <motion.path
          fill="#7BA993"
          fillRule="nonzero"
          d="M816.229 765.792v.006L714.2 824.7v.003l-102.027 58.905v117.808l102.025-58.902 102.027-58.908L918.253 824.7l102.025-58.908-102.025-58.905v.003zM816.229 530.17v.003L714.2 589.078v.003l-102.027 58.903v117.81l102.025-58.905 102.027-58.905 102.027-58.908 102.025-58.906-102.025-58.908v.006z"
          variants={pathVariants}
          custom={6}
        />
        <motion.path
          fill="#7BA993"
          fillRule="nonzero"
          d="m204.054 530.157-102.024-58.9v-.008L.005 530.157 102.03 589.06v.003z"
          variants={pathVariants}
          custom={7}
        />
        <motion.path
          fill="#7BA993"
          fillRule="nonzero"
          d="M204.061 765.781 102.036 824.69l102.025 58.906v.002h.006l-.003.003 89.76 51.822 6.35 3.667 5.917 3.416.006.003h-.003l102.024 58.906.003.002V883.611l-.003-65.963V765.79l-.002-.003V647.979l-.009-.006-102.019 58.903z"
          variants={pathVariants}
          custom={8}
        />

        {/* Gray paths - #605F5F */}
        <motion.path
          fill="#605F5F"
          fillRule="nonzero"
          d="M918.253 824.702v-.003l-102.025 58.908zM816.226 883.608v-.002L714.2 942.514zM714.197 942.515v-.003l-102.025 58.906zM918.253 589.08v-.003l-102.025 58.908zM816.226 647.986v-.002L714.2 706.889zM714.197 706.893v-.003l-102.025 58.906z"
          variants={pathVariants}
          custom={9}
        />
        <motion.path
          fill="#605F5F"
          d="M510.13 235.625h.004v.003h-.003z"
          variants={pathVariants}
          custom={10}
        />
        <motion.path
          fill="#605F5F"
          fillRule="nonzero"
          d="M306.08 353.44v-.002l-.003.003zM612.16 294.537h.003v-.003zM408.11 412.348h-.003l.003.003zM714.192 353.447v-.003l-.003.003zM918.253 353.458v-.003L816.228 412.36zM816.226 412.364v-.002L714.2 471.267zM714.197 471.27v-.002l-102.025 58.905zM612.17 530.176v-.003l-102.027 58.908z"
          variants={pathVariants}
          custom={11}
        />
        <motion.path
          fill="#605F5F"
          fillRule="nonzero"
          d="M102.03 942.495V589.061L.007 530.158l-.003 117.81h.003L.003 765.783h.003L.003 883.59zM204.06 883.593l-102.025-58.902-.003 117.81 102.028 58.906zM306.091 942.505l-5.916-3.416-96.111-55.486-.003 117.81 102.03 58.906z"
          variants={pathVariants}
          custom={12}
        />
        <motion.path
          fill="#605F5F"
          fillRule="nonzero"
          d="M510.15 1178.137V589.08l-102.026-58.903v117.805-117.81l-.003-.003-102.028-58.903v117.805-117.81h-.002v-.003l-102.025-58.903-.003 117.805v-117.81l-.003-.003-102.024-58.902-.003 117.805V353.443l-.003-.006-102.024-58.9v117.811l102.024 58.903.003.002v.006l102.022 58.9-102.022 58.905 102.027-58.905v.002l.003.003v.003l102.028 58.903v.002l.002.003v.003l102.011 58.894h.003l.011.008v117.808h.003v51.861l.003 65.961v117.808l-.003-.003-102.028-58.902v117.81l102.03 58.903v-117.803 117.808z"
          variants={pathVariants}
          custom={13}
        />

        {/* Dark green paths - #516E5E */}
        <motion.path
          fill="#516E5E"
          fillRule="nonzero"
          d="m102.03 824.685 102.03-58.905v-.003l102.028-58.902v-.006l102.016-58.897-102.013-58.894v-.003l-.003-.003v-.002l-102.027-58.903v-.003l-.003-.003v-.002L102.03 589.064z"
          variants={pathVariants}
          custom={14}
        />

        {/* Light gray paths - #949392 */}
        <motion.path
          fill="#949392"
          fillRule="nonzero"
          d="M408.11 176.72h-.003l.003.004zM204.054 294.535h-.002l.002-.002-.005-.003-102.022-58.905L0 294.533l102.024 58.908h.003zM306.083 353.445h-.002zl-.005-.006.003-.003-102.025-58.902v.003l-102.025 58.908 102.022 58.902.003.003h.003zM510.144 471.266h-.003l.003-.003h-.005l-.003-.003h.003l-102.025-58.905v.003L306.09 471.263l102.025 58.905v.003h.003zM408.111 412.355v-.003l-.005-.002h.005l-102.024-58.906v.003l-102.028 58.908 102.025 58.906h.003l102.027-58.906zM816.22 294.548l-102.024 58.905v.003l-102.024 58.905-.003.003-102.025 58.903v.002L408.12 530.175l102.024 58.905 102.028-58.905 102.024-58.908 102.03-58.906 102.025-58.905 102.027-58.908-102.027-58.908h-.003l-102.022 58.908z"
          variants={pathVariants}
          custom={15}
        />
        <motion.path
          fill="#949392"
          fillRule="nonzero"
          d="M.005 294.535 510.133 0l510.137 294.538-510.133 294.531z"
          variants={pathVariants}
          custom={16}
        />
      </motion.svg>
    </div>
  );
};

export default AnimatedLogo;