import React from 'react';
import { Typography } from '@material-ui/core';

// AtomicDesignについての説明を記述するコンポーネント
export function DescriptionText() {
  return (
    <Typography
      aligin='center'
      variant='h6'
    >
      AtomicDesignとはUIを原子レベルまで分解してデザインしていくデザイン手法。<br />
      AtomicDesignを使用することでUIのメンテナンス性が向上し、長期的にサービスを継続していくことが容易になります。 <br />
      私はAtomicDesignを難しそうだと考えていましたが、今回はAtomicDesignを実践して、実際に利用してみてどう感じたかを伝えようと考えています。
    </Typography>
  );
}