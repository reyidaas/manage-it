import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, FindOneOptions } from 'typeorm';

import Tag from './tag.entitiy';

@Injectable()
class TagService {
  constructor(@InjectRepository(Tag) private tagRepository: Repository<Tag>) {}

  async getTabByName(name: string): Promise<Tag | null> {
    const tag = await this.tagRepository.findOne({ name: name.toLowerCase() });

    return tag || null;
  }

  async getOrCreateTag(name: string): Promise<Tag> {
    let tag = await this.getTabByName(name);

    if (!tag) {
      tag = this.tagRepository.create({
        name: name.toLowerCase(),
      });

      await this.tagRepository.save(tag);
    }

    return tag;
  }
}

export default TagService;
