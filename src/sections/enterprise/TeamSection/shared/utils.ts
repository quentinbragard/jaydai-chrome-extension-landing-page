export const getBadgeName = (badgeUrl: string): string => {
    const filename = badgeUrl.split('/').pop()?.split('.')[0] || '';
    return filename.charAt(0).toUpperCase() + filename.slice(1).replace(/-/g, ' ');
  };