import { RefObject, useCallback, useEffect, useState } from "react";
import { withClientSideCheck } from "hocs/withClientSideCheck";

type IUseTrackActiveSection =
  (containerRef?: RefObject<HTMLDivElement>) => string;

const useTrackActiveSection: IUseTrackActiveSection = (containerRef) => {
  const [sections, setSections] = useState<NodeListOf<ChildNode> | []>([]);
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    if (containerRef) {
      if (containerRef.current.childNodes) {
        setSections(() => containerRef.current.childNodes);
      }
    }
  }, [containerRef?.current?.childNodes]);

  const handleScroll = useCallback(() => {
    const scrollPosition = window.scrollY;
    sections.forEach((section: HTMLDivElement) => {
      const top = section.offsetTop;
      const height = section.offsetHeight;

      if (scrollPosition >= top && scrollPosition < top + height) {
        const sectionId = section.getAttribute('id');
        setActiveSection(sectionId);
      }
    });
  }, [window.scrollY, sections, setActiveSection]);

  const updateUrl = useCallback((sectionId: string) => {
    const url = window.location.href.split('#')[0] + `#${sectionId}`;
    window.history.replaceState(null, '', url);
  }, [window.location, window?.history]);

  useEffect(() => {
    document.addEventListener('scroll', handleScroll);
    return () => document.removeEventListener('scroll', handleScroll);
  }, [sections]);

  useEffect(() => {
    if (activeSection) {
      updateUrl(activeSection);
    }
  }, [activeSection]);

  return activeSection;
}

export default withClientSideCheck(useTrackActiveSection);
