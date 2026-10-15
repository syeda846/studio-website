// Browser-independent curve geometry: works even when an SVG is display:none.
export function createJourneyGeometry(start, segments, samples = 80) {
  const points = [{ x: start[0], y: start[1], distance: 0 }];
  const prefixes = [`M${start[0]},${start[1]}`];
  let origin = start;
  let length = 0;
  const milestones = [0];
  for (const [c1, c2, end] of segments) {
    for (let index = 1; index <= samples; index++) {
      const t = index / samples, u = 1 - t;
      const x = u*u*u*origin[0] + 3*u*u*t*c1[0] + 3*u*t*t*c2[0] + t*t*t*end[0];
      const y = u*u*u*origin[1] + 3*u*u*t*c1[1] + 3*u*t*t*c2[1] + t*t*t*end[1];
      const previous = points[points.length - 1];
      length += Math.hypot(x - previous.x, y - previous.y);
      points.push({ x, y, distance: length });
      prefixes.push(`${prefixes[prefixes.length - 1]}L${x},${y}`);
    }
    milestones.push(length);
    origin = end;
  }
  return {
    path: prefixes[prefixes.length - 1],
    milestones: milestones.map(distance => distance / length),
    at(progress) {
      const fraction = Math.max(0, Math.min(1, progress));
      const distance = fraction * length;
      let low = 0, high = points.length - 1;
      while (low < high) {
        const middle = Math.ceil((low + high) / 2);
        if (points[middle].distance <= distance) low = middle;
        else high = middle - 1;
      }
      const a = points[low], b = points[Math.min(low + 1, points.length - 1)];
      const ratio = b.distance === a.distance ? 0 : (distance - a.distance) / (b.distance - a.distance);
      const x = a.x + (b.x - a.x) * ratio, y = a.y + (b.y - a.y) * ratio;
      return { x, y, path: fraction === 0 ? '' : `${prefixes[low]}L${x},${y}` };
    },
  };
}
export const desktopJourney = createJourneyGeometry([100,310], [
  [[175,310],[220,185],[300,185]], [[365,145],[425,140],[500,160]],
  [[575,180],[620,270],[700,270]], [[780,270],[835,245],[900,220]],
  [[985,190],[1010,90],[1100,90]],
]);
export const mobileJourney = createJourneyGeometry([48,56], [
  [[8,115],[88,177],[48,236]], [[8,295],[8,357],[48,416]],
  [[88,475],[88,537],[48,596]], [[8,655],[8,717],[48,776]],
  [[88,835],[88,897],[48,956]],
]);
