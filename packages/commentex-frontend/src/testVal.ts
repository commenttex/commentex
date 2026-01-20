export const testval = String.raw`
% !TeX spellcheck = <german>
\documentclass[11pt, draft]{article}
\title{\textbf{Projektantrag}}
\author{Jonas Küpper}
\date{13.01.2025}

\usepackage[a4paper, top=2.5cm, left=3cm, right=3cm, bottom=2cm]{geometry}
\usepackage[onehalfspacing]{setspace}
\usepackage[T1]{fontenc}
\usepackage[utf8]{inputenc}
%\usepackage[ngerman]{babel}
\usepackage[autostyle=true]{csquotes}
\usepackage{color, soul}
\usepackage{hyperref}
\usepackage{titlesec}
\hypersetup{
    colorlinks,
    citecolor=black,
    filecolor=black,
    linkcolor=black,
    urlcolor=black
}
\usepackage{helvet}
\usepackage{tikz}
\usetikzlibrary{calc,shapes,arrows,positioning}
\usepackage{parskip}
\usepackage{fancyhdr}
\pagestyle{fancy}
\renewcommand{\familydefault}{\sfdefault}
\usepackage{xcolor}

\newcommand{\badge}[1]{%
    \tikz[baseline=(X.base)]\node[
    draw=none,
    fill=gray!20,
    rounded corners=3pt,
    inner xsep=3pt,
    inner ysep=1pt
    ](X){\strut #1};%
}

\titlespacing*{\section}{0pt}{5pt}{5pt}
\titlespacing*{\subsection}{0pt}{8pt}{-1pt}
\titlespacing*{\subsubsection}{0pt}{8pt}{-1pt}

\begin{document}
    \setlength{\parindent}{0pt}
    \emergencystretch=3em

    \maketitle
    \newpage

    \section{Projektbezeichnung}
    Erweiterung der betriebsinternen Phishing-Plattform \enquote{Apate}, um eine Kampagnen Funktion mit zeitgesteuerter Absendung.

    % ... rest of your LaTeX ...

\end{document}
`;
