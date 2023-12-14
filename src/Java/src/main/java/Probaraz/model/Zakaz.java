package Probaraz.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Probaraz.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;
import java.util.Date;
import java.util.List;

/**
 * Entity implementation class for Entity: Заказ
 */
@Entity(name = "IISProbarazЗаказ")
@Table(schema = "public", name = "Заказ")
public class Zakaz {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "НомерЗаказа")
    private Integer номерзаказа;

    @Column(name = "Дата")
    private Date дата;

    @Column(name = "Итог")
    private Double итог;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Kontragent")
    @Convert("Kontragent")
    @Column(name = "Контрагент", length = 16, unique = true, nullable = false)
    private UUID _kontragentid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Kontragent", insertable = false, updatable = false)
    private Kontragent kontragent;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Master")
    @Convert("Master")
    @Column(name = "Мастер", length = 16, unique = true, nullable = false)
    private UUID _masterid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Master", insertable = false, updatable = false)
    private Master master;

    @OneToMany(mappedBy = "zakaz", fetch = FetchType.LAZY, cascade = CascadeType.REMOVE)
    private List<RaschetZakaza> raschetzakazas;


    public Zakaz() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Integer getНомерЗаказа() {
      return номерзаказа;
    }

    public void setНомерЗаказа(Integer номерзаказа) {
      this.номерзаказа = номерзаказа;
    }

    public Date getДата() {
      return дата;
    }

    public void setДата(Date дата) {
      this.дата = дата;
    }

    public Double getИтог() {
      return итог;
    }

    public void setИтог(Double итог) {
      this.итог = итог;
    }


}