package Probaraz.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Probaraz.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;


/**
 * Entity implementation class for Entity: Номенклатура
 */
@Entity(name = "IISProbarazНоменклатура")
@Table(schema = "public", name = "Номенклатура")
public class Nomenklatura {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "НомерТовара")
    private Integer номертовара;

    @Column(name = "Товар")
    private String товар;

    @Column(name = "Цена")
    private Double цена;


    public Nomenklatura() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Integer getНомерТовара() {
      return номертовара;
    }

    public void setНомерТовара(Integer номертовара) {
      this.номертовара = номертовара;
    }

    public String getТовар() {
      return товар;
    }

    public void setТовар(String товар) {
      this.товар = товар;
    }

    public Double getЦена() {
      return цена;
    }

    public void setЦена(Double цена) {
      this.цена = цена;
    }


}